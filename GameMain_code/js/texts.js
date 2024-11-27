/* texts.js -> ゲーム内のテキストと選択肢のデータを管理するJsファイル
   セリフや背景、キャラクター情報を一元管理し、追加・変更を容易にする。 */

const texts = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ねえねえ！！",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "なにー？",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "このバイト、見てほしいんだけど、、、",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "すっごく、お金がもらえるバイト見つけたんだー！！",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    scene5: {
        text: "ほんとにー？\nあやしいばいとじゃないのー？？",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene6"
    },
    scene6: {
        text: "えー？ でもここにホワイト案件って書いてあるからだいじょうぶでしょ！！",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene7"
    },
    scene7: {
        text: "うーん、\n応募しよっかなー、、どうしよっかなー、、、",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    // シーン8: 選択肢が登場するシーン
    scene8: {
        text: "あなたはどちらを選びますか？",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "応募しない",
                description: "最近、ニュースとかで闇バイトで捕まっている人もいるし、\n闇バイトだったら怖いから、応募はやめとこー！",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "とりあえず応募する",
                description: "今、どうしてもほしいブランドバックがあるけどお金がないから、ちょうどよかったー！\n応募しちゃおー！！",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "やっぱり応募はやめておこう！。安全第一！！",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "よーし、応募完了！結果が楽しみだな〜！",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};

// 他のシーンの追加はここから ↓
