// save-load-system.js <- セーブ・ロードの内部処理

export class SaveLoadSystem {
    /**
     * @param {Object} gameState ゲームの状態オブジェクト
     * @param {Function} setGameState ゲーム状態を更新するコールバック関数
     */
    constructor(gameState, setGameState) {
        this.gameState = gameState;
        this.setGameState = setGameState;

        // セーブスロットの数（ここでは3スロット）
        this.totalSlots = 3;
    }

    /**
     * ゲームを指定したスロットにセーブする関数
     * @param {number} slotIndex セーブスロットのインデックス
     */
    saveGame(slotIndex) {
        if (slotIndex < 0 || slotIndex >= this.totalSlots) {
            console.error(`無効なセーブスロット: ${slotIndex}`);
            return;
        }

        const saveData = {
            ...this.gameState,
            timestamp: new Date().toLocaleString()
        };
        localStorage.setItem(`saveSlot${slotIndex}`, JSON.stringify(saveData));
        console.log(`スロット${slotIndex + 1}にセーブしました。`);
        alert(`スロット${slotIndex + 1}にセーブしました。`);
        this.updateSaveLoadUI();
    }

    /**
     * 指定したスロットからゲームをロードする関数
     * @param {number} slotIndex ロードするセーブスロットのインデックス
     */
    loadGame(slotIndex) {
        if (slotIndex < 0 || slotIndex >= this.totalSlots) {
            console.error(`無効なロードスロット: ${slotIndex}`);
            return;
        }

        const savedData = localStorage.getItem(`saveSlot${slotIndex}`);
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                this.setGameState(parsedData);
                console.log(`スロット${slotIndex + 1}のデータをロードしました。`);
                alert(`スロット${slotIndex + 1}のデータをロードしました。`);
            } catch (error) {
                console.error(`ロードデータの解析に失敗しました: ${error}`);
                alert(`ロードデータの解析に失敗しました。`);
            }
        } else {
            console.error(`スロット${slotIndex + 1}にセーブデータがありません。`);
            alert(`スロット${slotIndex + 1}にセーブデータがありません。`);
        }
    }

    /**
     * セーブ・ロードUIを更新する関数
     */
    updateSaveLoadUI() {
        for (let i = 0; i < this.totalSlots; i++) {
            const saveButton = document.getElementById(`save-slot-${i + 1}`);
            const loadButton = document.getElementById(`load-slot-${i + 1}`);

            const savedData = localStorage.getItem(`saveSlot${i}`);
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                saveButton.textContent = `セーブ${i + 1} (${parsedData.timestamp})`;
                loadButton.textContent = `ロード${i + 1} (${parsedData.timestamp})`;
            } else {
                saveButton.textContent = `セーブ${i + 1}`;
                loadButton.textContent = `ロード${i + 1}`;
            }
        }
    }

    /**
     * セーブ・ロードシステムを初期化する関数
     */
    initialize() {
        this.updateSaveLoadUI();
    }
}
