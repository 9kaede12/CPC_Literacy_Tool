/* game.js -> メインのゲームロジックと共通関数の再定義を行うJsファイル
   各機能をモジュール化し、再利用性と保守性を向上させる。 */

// ゲームの状態を管理するオブジェクト
const gameState = {

    // 現在表示されているシーンのIDを保持
    currentScene: 'scene1',

    // 全シーンのデータ（text.jsからtextsが提供される）
    scenes: texts,

    // テキストが文字送り中かを示すフラグ
    isTyping: false,

    // ゲームがポーズ中かを示すフラグ
    isPaused: false,

    // バックログを保持
    history: []
};

// DOM要素の取得（要素は全てここで宣言して管理）
const elements = {
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

// オートモードのインスタンスを作成
const autoModeButton = new AutoMode(false, () => {
    console.log("次のシーンに進むコールバックが呼び出されました。");
    sceneManager.nextScene()
});

// バックログのインスタンスを作成
const backlogButton = new Backlog(gameState);
backlogButton.initialize();

// セーブ・ロードのインスタンスを作成
const saveLoadSystem = new SaveLoadSystem(gameState, (newState) => {
    Object.assign(gameState, newState);
    sceneManager.showScene(gameState.currentScene);
})

// テキスト表示管理関数
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

// シーン管理関数
const sceneManager = {
    showScene(sceneId, addToBacklog = true) {

        // 一時停止中なら処理しない
        if (gameState.isPaused) return;

        // 表示するシーンのデータ取得
        const scene = gameState.scenes[sceneId];
        // 現在のシーンIDを更新
        gameState.currentScene = sceneId;

        // 背景とキャラクターを設定
        this.setBackground(scene.backgroundId);
        this.setCharacter(scene.characterId);

        textManager.typeText(scene.text, () => {

            // シーンが進んだ場合のみバックログに追加
            if (addToBacklog) {
                console.log("バックログに追加します:", sceneId);
                backlogButton.addEntry(sceneId, scene.text);
            }

            // 選択肢があれば表示
            if (scene.choices) {
                this.showChoices(scene.choices);
            } else if (AutoMode.isActive) {

                // テキスト完了後にオートモードを開始
                AutoMode.startAutoMode();
            }
        });
    },

    // 画像の事前ロードの関数
    preloadImagesFromObject(Object, callback) {
        let loadedCount = 0;
        const imageUrls = [];

        //全オブジェクトから画像URLを抽出
        Object.forEach(obj => {
            imageUrls.push(...Object.values(obj));
        });

        imageUrls.forEach((url) => {
            // Imageオブジェクトを作成
            const img = new Image();
            // URLを指定して画像を読み込む
            img.src = url;

            img.onload = () => {
                loadedCount++;

                // すべてのロードが完了後にコールバックを実行
                if (loadedCount === imageUrls.length && callback) {
                    callback();
                }
            };

            img.onerror = () => {
                console.error(`画像の読み込みに失敗しました: ${url}`);
            }
        })
    },

    // ゲーム開始準備関数
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

    // 背景画像を変更
    setBackground(backgroundId) {
        elements.background.style.backgroundImage = backgrounds[backgroundId];
    },

    // キャラクター画像を変更
    setCharacter(characterId) {
        elements.character.style.backgroundImage = characters[characterId];
    },

    showChoices(choices) {

        // 選択肢コンテナの表示
        elements.choices.style.display = 'flex';
        // elements.textBox.style.display = 'none';
        choices.forEach((choice, index) => {

            // 選択肢の内容を設定
            this.setChoiceContent(elements.choiceElements[index], choice);
            elements.choiceElements[index].onclick = () => {

                // 選択肢を隠す
                this.hideChoices();

                // 次のシーンを表示
                this.showScene(choice.nextScene);
            };
        });
    },

    setChoiceContent(choiceElement, choice) {
        const iconElement = choiceElement.querySelector('.choice-icon');
        const titleElement = choiceElement.querySelector('.card__title');
        const descriptionElement = choiceElement.querySelector('.card__description');

        // アイコン画像を設定（.choice-icon）
        iconElement.src = choiceIcons[choice.iconId];

        // タイトルを設定（.card_title）
        titleElement.textContent = choice.title;

        // 説明文を設定（.card_description）
        descriptionElement.textContent = choice.description;
    },

    // 選択肢コンテナを非表示
    hideChoices() {
        elements.choices.style.display = 'none';
    },

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

    skipToScene(sceneId, force = false) {

        // forceがtrueかつ一時停止中なら処理を中断
        if (!force && gameState.isPaused) return;

        // 指定されたシーンが存在すればそのシーンを表示
        if (gameState.scenes[sceneId]) {
            this.showScene(sceneId);
        }
    }
};

// ゲーム制御関連の関数
const gameController = {
    pauseGame() {

        // 一時停止をtrueにして設定画面を表示
        gameState.isPaused = true;
        gameState.pausedScene = gameState.currentScene;
        document.getElementById('setting-menu').style.display = 'flex';
    },

    resumeGame() {

        // 一時停止を解除して設定画面を非表示
        gameState.isPaused = false;
        document.getElementById('setting-menu').style.display = 'none';

        if (gameState.pausedScene) {

            // 記憶していたシーンを最初から再表示
            sceneManager.showScene(gameState.pausedScene);
            // 一時停止のシーン記憶をリセット
            gameState.pausedScene = null;

            // フラグを停止してバックログへの追加を防止
            sceneManager.showScene(pausedScene, false);
        }
    },

    goToResults() {
        gameState.isPaused = false;

        // スコアを保存
        localStorage.setItem('finalScore', gameState.score || 0);
        // 結果画面へのリダイレクト
        window.location.href = 'result.html'; // <- 変更箇所：結果画面のHTMLはあとで差し替え
    }
};

// イベントリスナーの設定

// 設定ボタンのクリックイベント
document.getElementById('setting-button').onclick = () => {
    gameController.pauseGame();
}

// ゲームに戻るボタンのクリックイベント
document.getElementById('resume-button').onclick = () => {
    gameController.resumeGame();
};

// 結果を表示ボタンのクリックイベント
document.getElementById('result-button').onclick = () => {
    gameController.goToResults();
};

// オートモードボタンのクリックイベント
document.getElementById('auto-mode-button').onclick = () => {
    console.log("オートモードボタンがクリックされました。");
    autoModeButton.toggleAutoMode();
}

//バックログボタンのクリックイベント
document.getElementById('backlog-button').onclick = () => {
    console.log("バックログボタンがクリックされました。");
    backlogButton.toggleBacklog();
}

// セーブ・ロードボタンのクリックイベント
document.querySelectorAll('#save-load-system button').forEach(button => {
    const slotIndex = parseInt(button.getAttribute('data-slot'), 10);

    if (button.id.startsWith('save')) {
        button.onclick = () => saveLoadSystem.saveGame(slotIndex);
    } else if (button.id.startsWith('load')) {
        button.onclick = () => saveLoadSystem.loadGame(slotIndex);
    }
});



document.addEventListener('click', (event) => {

    // クリックした位置のY座標を取得
    const clickY = event.clientY;

    // 画面の高さを取得
    const screenHeight = window.innerHeight;
    if (clickY > screenHeight / 2) {
        if (!gameState.isTyping && !gameState.isPaused && !gameState.scenes[gameState.currentScene].choices) {
            sceneManager.nextScene();
        }
    }
});

sceneManager.initializeGame();
sceneManager.showScene('scene1');