// auto-mode.js <- オートモードの内部処理

class AutoMode {
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

    toggleAutoMode() {

        // on/offを切り替える
        this.isActive = !this.isActive;

        console.log(`オートモード切り替え: ${this.isActive ? "ON" : "OFF"}`);

        if (this.isActive) {

            // オートモードを開始
            this.startAutoMode();
        } else {
            // オートモードを停止
            this.stopAutoMode();
        }
    }

    startAutoMode() {
        if (this.timer) {
            console.warn("既存のタイマーをクリアします。");
            clearTimeout(this.timer);
        }

        if (!this.isActive) {
            console.warn("オートモードは無効です。タイマーを設定しません。")
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

    // タイマーを停止、タイマーIDをリセット
    stopAutoMode() {
        if (!this.timer) {
            console.warn("オートモードは既に停止しています。");
            return;
        }
        console.log("オートモードを停止します。");

        clearTimeout(this.timer);
        this.timer = null;
        }
    }

// クラスをグローバルスコープに公開
window.AutoMode = AutoMode;