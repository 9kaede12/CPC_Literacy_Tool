/**
 * ゲームの自動再生を管理します。
 */
class AutoMode {
    /**
     * コンストラクタ
     * @param isActive 有効状態の場合はtrue、無効状態はfalse
     * @param nextSceneCallback 次シーンのコールバック関数
     */
    constructor(isActive, nextSceneCallback) {
      // オートモードのon/off状態
      this.isActive = isActive;
      // 次のシーンに進むためのコールバック関数
      this.nextSceneCallback = nextSceneCallback;
      // 自動進行を管理するタイマーID
      this.timer = null;
      // 次のシーンに進むまでの間隔(ms)
      this.delay = 3000;
    }

    /**
     * オートモードを切り替える関数
     */
    toggleAutoMode() {
      this.isActive = !this.isActive;
      console.log(`オートモード切り替え: ${this.isActive ? "ON" : "OFF"}`);

      if (this.isActive) {
        this.startAutoMode();
      } else {
        this.stopAutoMode();
      }
    }

    /**
     * オートモードを開始する関数
    */
    startAutoMode() {
      if (this.timer) {
        console.warn("既存のタイマーをクリアします。");
        clearTimeout(this.timer);
      }

      if (!this.isActive) {
        console.warn("オートモードは無効です。タイマーを設定しません。");
        return;
      }
      console.log("オートモードを開始します。");

      // 一定時間で次のシーンに進む
      this.timer = setTimeout(() => {
        console.log("オートモード: 次のシーンに進むコールバックを実行します。");
        this.nextSceneCallback();
        if (this.isActive) {
          // シーン進行後もオートモードが有効なら再度タイマーを設定
          this.startAutoMode();
        }
      }, this.delay);
    }

      /**
       * オートモードを停止する関数
       */
      stopAutoMode() {
        if (!this.timer) {
          console.warn("オートモードは既に停止しています。");
          return;
        }
        console.log("オートモードを停止します。");

        clearTimeout(this.timer);
        this.timer = null;
      }

      /**
       * オートモードを一時停止する関数（選択肢表示時など）
       */
      pauseAutoMode() {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
          console.log("オートモードを一時停止しました。");
        }
      }

      /**
       * オートモードを再開する関数（選択肢選択後など）
       */
      resumeAutoMode() {
        if (this.isActive && !this.timer) {
            console.log("オートモードを再開します。");
            this.startAutoMode();
        }
      }
  }
