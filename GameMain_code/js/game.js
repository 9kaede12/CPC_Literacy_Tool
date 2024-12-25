/**
 * メインのゲームロジックと共通関数の再定義を行います。
 */

import { AutoMode } from './auto-mode.js';
import { Backlog } from './backlog.js';
import { SaveLoadSystem } from './save-load-system.js';
import { texts } from './texts.js';
import { backgrounds, characters, choiceIcons } from './img.js';

/**
 * @brief ゲームの状態を管理するオブジェクト
 */
const gameState = {
  // 現在表示されているシーンのID
  currentScene: 'scene1',
  // 全シーンのデータ（text.jsからtextsが提供される）
  scenes: texts,
  // テキストが文字送り中かを示すフラグ
  isTyping: false,
  // ゲームがポーズ中かを示すフラグ
  isPaused: false,
  // バックログを保持
  history: [],
  // 正解数
  correctCount: 0,
  // 回答数
  answeredCount: 0,
  // 
  pausedScene: null
};

/**
 * @brief DOM要素の取得（要素は全てここで宣言して管理）
 */
const elements = {
  speakerName: document.getElementById('speaker-name'),
  text: document.getElementById('text'),
  textBox: document.getElementById('text-box'),
  choices: document.getElementById('choices'),
  background: document.getElementById('background'),
  character: document.getElementById('character'),
  settingButton: document.getElementById('setting-button'),
  backlogButton: document.getElementById('backlog-button'),
  autoModeButton: document.getElementById('auto-mode-button'),
  saveLoadContainer: document.getElementById('save-load-system'),
  choiceElements: [
    document.getElementById('choice1'),
    document.getElementById('choice2')
  ]
};

/**
 * @brief オートモードのインスタンスを作成
 */
const autoMode = new AutoMode(false, () => {
  console.log("次のシーンに進むコールバックが呼び出されました。");
  sceneManager.nextScene();
});

/**
 * @brief バックログのインスタンスを作成
 */
const backlog = new Backlog(gameState);
backlog.initialize();

/**
 * @brief セーブ・ロードのインスタンスを作成
 */
const saveLoadSystem = new SaveLoadSystem(gameState, (newState) => {
  Object.assign(gameState, newState);
  sceneManager.showScene(gameState.currentScene, false);
});

/**
 * @brief テキスト表示管理関数
 *
 * @param {string} text テキストデータ
 * @param {function} callback コールバック関数
 */
const textManager = {
  typeText(text, callback) {
    let index = 0;
    // テキスト表示エリアを初期化
    elements.text.innerText = '';
    // 文字送り中フラグをon
    gameState.isTyping = true;

    const intervalId = setInterval(() => {
      // ゲームがポーズ中なら文字送りを停止
      if (gameState.isPaused) {
        clearInterval(intervalId);
        return;
      }

      // テキストの文字数未満まで行う
      if (index < text.length) {
        // 次の文字を表示
        elements.text.innerText += text[index];
        index++;
      } else {
        // すべての文字が表示されたらタイマーを停止
        clearInterval(intervalId);
        // 文字送り中フラグをoff
        gameState.isTyping = false;
        if (callback) callback();
      }
    }, 50); // 50ミリ秒ごとに1文字を追加
  }
};

/**
 * @brief シーン管理関数
 */
const sceneManager = {
  /**
   * ゲームを初期化します。
   */
  initializeGame() {
    console.log("全画像を事前ロード中...");
    this.preloadImagesFromObject(
      // ここに新しい画像カテゴリを追加できる
      [backgrounds, characters, choiceIcons],
      () => {
        console.log("すべての画像が事前ロードされました！");
        // 最初のシーンを表示
        this.showScene('scene1');
      }
    )
  },

  /**
   * シーンを表示します。
   * @param sceneId シーンID
   * @param canAddBacklog バックログの追加を許可する場合はtrue、許可しない場合はfalseを返却します。
   */
  showScene(sceneId, canAddBacklog = true) {
    // 一時停止中なら処理しない
    if (gameState.isPaused) return;

    // 表示するシーンのデータ取得
    const scene = gameState.scenes[sceneId];
    if (!scene) {
      console.error(`シーンが見つかりません: ${sceneId}`);
      return;
    }
    // 現在のシーンIDを更新
    gameState.currentScene = sceneId;
    // 背景とキャラクターを設定
    this.setBackground(scene.backgroundId);
    this.setCharacter(scene.characterId);

    // フォントの設定（必要に応じて）
    if (scene.fontId) {
      this.setFont(scene.fontId);
    }

    // 話者名を表示
    if (scene.speaker) {
      elements.speakerName.innerText = scene.speaker;
    } else {
      elements.speakerName.innerText = '';
    }

    textManager.typeText(scene.text, () => {
      // シーンが進んだ場合のみバックログに追加
      if (addToBacklog) {
        console.log("バックログに追加します:", sceneId);
        backlog.addEntry(scene.speaker, scene.text);
      }

      // 選択肢があれば表示
      if (scene.choices) {
        // 選択肢表示時にオートモードを一時停止
        autoMode.pauseAutoMode();
        this.showChoices(scene.choices);
      } else if (autoMode.isActive) {
        // テキスト完了後にオートモードを開始
        autoMode.startAutoMode();
      }
    });
  },

  /**
   * 画像の事前ロードの関数
   *
   * @param {Array} imageCategories 画像カテゴリの配列
   * @param {function} callback 全画像のロード完了後に実行するコールバック
   */
  preloadImagesFromObject(imageCategories, callback) {
    let loadedCount = 0;
    const imageUrls = [];

    // 全オブジェクトから画像URLを抽出
    imageCategories.forEach(obj => {
      Object.values(obj).forEach(url => {
        if (url.startsWith('url(')) {
          // CSSのbackgroundImage用に括弧を外す
          const cleanUrl = url.slice(4, -1).replace(/["']/g, "");
          imageUrls.push(cleanUrl);
        } else {
          imageUrls.push(url);
        }
      });
    });

    // 重複を排除
    const uniqueUrls = [...new Set(imageUrls)];
    uniqueUrls.forEach((url) => {
      // Imageオブジェクトを作成
      const img = new Image();
      // URLを指定して画像を読み込む
      img.src = url;
      img.onload = () => {
        loadedCount++;

        // すべてのロードが完了後にコールバックを実行
        if (loadedCount === uniqueUrls.length && callback) {
          callback();
        }
      };

      img.onerror = () => {
        console.error(`画像の読み込みに失敗しました: ${url}`);
      }
    });
  },

  /**
   * 背景画像を変更
   * @param {string} backgroundId 背景画像のID
   */
  setBackground(backgroundId) {
    const bgUrl = backgrounds[backgroundId];
    if (bgUrl) {
      elements.background.style.backgroundImage = `url('${bgUrl}')`;
    } else {
      console.error(`背景画像が見つかりません: ${backgroundId}`);
    }
  },

  /**
   * キャラクター画像を変更
   * @param {string} characterId キャラクター画像のID
   */
  setCharacter(characterId) {
    const charUrl = characters[characterId];
    if (charUrl) {
      elements.character.style.backgroundImage = `url('${charUrl}')`;
    } else {
      console.error(`キャラクター画像が見つかりません: ${characterId}`);
    }
  },

  /**
   * フォントを設定する関数（必要に応じて実装）
   * @param {string} fontId フォントのID
   */
  setFont(fontId) {
    // フォントの適用ロジックをここに追加
    // 例: elements.textBox.style.fontFamily = fonts[fontId];
  },

  /**
   * 選択肢の表示
   * @param {Array} choices 選択肢の配列
   */
  showChoices(choices) {
    // 選択肢コンテナの表示
    elements.choices.style.display = 'flex';
    choices.forEach((choice, index) => {
      // 選択肢の内容を設定
      this.setChoiceContent(elements.choiceElements[index], choice);
      elements.choiceElements[index].onclick = () => {
        // 回答数を増加
        gameState.answeredCount++;

        // 正解かどうかを判定
        if (choice.isCorrect) {
          gameState.correctCount++;
          console.log("正解！現在の正解数:", gameState.correctCount);
        } else {
          console.log("不正解！");
        }

        // 選択肢を隠す
        this.hideChoices();
        // 次のシーンを表示する前にオートモードを再開
        autoMode.resumeAutoMode();
        // 次のシーンを表示
        this.showScene(choice.nextScene);
      };
    });
  },

  /**
   * 選択肢の内容を設定する関数
   * @param {HTMLElement} choiceElement 選択肢のDOM要素
   * @param {Object} choice 選択肢のデータ
   */
  setChoiceContent(choiceElement, choice) {
    const iconElement = choiceElement.querySelector('.choice-icon');
    const titleElement = choiceElement.querySelector('.card__title');
    const descriptionElement = choiceElement.querySelector('.card__description');

    // アイコン画像を設定（.choice-icon）
    const iconUrl = choiceIcons[choice.iconId];
    if (iconUrl) {
      iconElement.src = iconUrl;
    } else {
      console.error(`選択肢アイコンが見つかりません: ${choice.iconId}`);
    }

    // タイトルを設定（.card__title）
    titleElement.textContent = choice.title;

    // 説明文を設定（.card__description）
    descriptionElement.textContent = choice.description;
  },

  /**
   * 選択肢コンテナを非表示
   */
  hideChoices() {
    elements.choices.style.display = 'none';
  },

  /**
   * 次のシーンに進む
   */
  nextScene() {
    // 一時停止中なら処理を中断
    if (gameState.isPaused) return;
    // 現在のシーンデータを取得
    const currentScene = gameState.scenes[gameState.currentScene];
    if (currentScene.nextScene) {
      // 次のシーンが存在すれば表示
      this.showScene(currentScene.nextScene);
    } else {
      // 次のシーンがなければリザルトのhtml画面に遷移
      gameController.goToResults();
    }
  },

  /**
   * 指定されたシーンにスキップする関数
   * @param {string} sceneId シーンのID
   * @param {boolean} force 強制的にスキップするか
   */
  skipToScene(sceneId, force = false) {
    // forceがtrue以外で一時停止中なら処理を中断
    if (!force && gameState.isPaused) return;
    // 指定されたシーンが存在すればそのシーンを表示
    if (gameState.scenes[sceneId]) {
        this.showScene(sceneId);
    } else {
      console.error(`シーンが見つかりません: ${sceneId}`);
    }
  }
};

/**
 * @brief ゲーム制御関連の関数
 */
const gameController = {
  /**
   * ゲームを一時停止します。
   */
  pauseGame() {
    // 一時停止をtrueにして設定画面を表示
    gameState.isPaused = true;
    gameState.pausedScene = gameState.currentScene;
    document.getElementById('setting-menu').style.display = 'flex';
  },

  /**
   * ゲームを再開します。
   */
  resumeGame() {
    // 一時停止を解除して設定画面を非表示
    gameState.isPaused = false;
    document.getElementById('setting-menu').style.display = 'none';
    if (gameState.pausedScene) {
      // 記憶していたシーンを再表示
      sceneManager.showScene(gameState.pausedScene, false);
      // 一時停止のシーン記憶をリセット
      gameState.pausedScene = null;
    }
  },

  /**
   * リザルト画面に遷移する関数
   */
  goToResults() {
    gameState.isPaused = false;

    // スコアを保存
    localStorage.setItem('finalScore', gameState.correctCount);
    localStorage.setItem('totalQuestions', gameState.answeredCount);
    // 結果画面へのリダイレクト
    window.location.href = 'result.html'; // <- 結果画面のHTMLを適宜差し替えてください
  }
};

//#region イベント
// 設定ボタンのクリックイベント
elements.settingButton.onclick = () => {
  gameController.pauseGame();
}

/** ゲームに戻るボタン押下時 */
document.getElementById('resume-button').onclick = () => {
  gameController.resumeGame();
};

/** 結果を表示ボタン押下時 */
document.getElementById('result-button').onclick = () => {
  gameController.goToResults();
};

// オートモードボタンのクリックイベント
elements.autoModeButton.onclick = () => {
  console.log("オートモードボタンがクリックされました。");
  autoMode.toggleAutoMode();
}

// バックログボタンのクリックイベント
elements.backlogButton.onclick = () => {
  console.log("バックログボタンがクリックされました。");
  backlog.toggleBacklog();
}

/** セーブ・ロードボタン押下時（未実装） */
document.querySelectorAll('#save-load-system button').forEach(button => {
  const slotIndex = parseInt(button.getAttribute('data-slot'), 10);
  if (button.id.startsWith('save')) {
    button.onclick = () => saveLoadSystem.saveGame(slotIndex);
  } else if (button.id.startsWith('load')) {
    button.onclick = () => saveLoadSystem.loadGame(slotIndex);
  }
});

// 画面クリックイベント（テキストスキップ）
document.addEventListener('click', (event) => {
  // クリックした位置のY座標を取得
  const clickY = event.clientY;

  // 画面の高さの下半分をクリックした際にシーンを進める
  const screenHeight = window.innerHeight;
  if (clickY > screenHeight / 2) {
    if (!gameState.isTyping && !gameState.isPaused && !gameState.scenes[gameState.currentScene].choices) {
      sceneManager.nextScene();
    }
  }
});
//#endregion

//#region 関数
// ゲームの初期化
document.addEventListener('DOMContentLoaded', () => {
  sceneManager.initializeGame();
});
//#endregion
