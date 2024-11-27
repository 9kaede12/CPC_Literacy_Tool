// save-load-system.js <- セーブ・ロードの内部処理

class SaveLoadSystem {
    constructor(gameState, setGameState) {
        this.gameState = gameState;
        this.setGameState = setGameState;

        // 3つの空きスロットの初期化
        this.saveSlots = [null, null, null];
    }

    saveGame(slotIndex) {
        this.saveSlots[slotIndex] = { ...this.gameState };
        localStorage.setItem(`セーブスロット${slotIndex}`, JSON.stringify(this.saveSlots[slotIndex]));
        console.log(`スロット${slotIndex}にセーブしました。`)
    }

    loadGame(slotIndex) {
        const savedData = localStorage.getItem(`saveSlot${slotIndex}`);
        if (savedData) {
            this.setGameState(JSON.parse(savedData));
            console.log(`スロット${slotIndex}のデータをロードしました。`)
        } else {
            console.error(`スロット${slotIndex}にセーブデータがありません。`)
        }
    }
}

window.SaveLoadSystem = SaveLoadSystem;