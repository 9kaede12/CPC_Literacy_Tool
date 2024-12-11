// auto-mode.js <- オートモードの内部処理

export class AutoMode {
    /**
     * @param {boolean} isActive オートモードの初期状態
     * @param {Function} nextSceneCallback 次のシーンに進むためのコールバック関数
     */
    constructor(isActive, nextSceneCallback) {
        this.isActive = isActive;
        this.nextSceneCallback = nextSceneCallback;
        this.timer = null;
        this.delay = 3000; // 次のシーンに進むまでの間隔（ミリ秒）
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
