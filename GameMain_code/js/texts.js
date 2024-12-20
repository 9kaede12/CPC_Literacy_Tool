// texts.js -> ゲーム内のテキストと選択肢のデータを管理するJsファイル
export const texts = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ねえねえ！！",
        speaker: "アヤ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "なにー？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "このバイト、見てほしいんだけど、、、",
        speaker: "アヤ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "すっごく、お金がもらえるバイト見つけたんだー！！",
        speaker: "アヤ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    scene5: {
        text: "ほんとにー？\nあやしいばいとじゃないのー？？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene6"
    },
    scene6: {
        text: "えー？ でもここにホワイト案件って書いてあるからだいじょうぶでしょ！！",
        speaker: "アヤ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene7"
    },
    scene7: {
        text: "うーん、\n応募しよっかなー、、どうしよっかなー、、、",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    // シーン8: 選択肢が登場するシーン
    scene8: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
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
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "よーし、応募完了！結果が楽しみだな〜！",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};


//小学生
export const etexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ー授業中ー",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "ﾃｨﾝﾄﾝ♪",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "あ、だれかからメッセージが届いた",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "授業中だどうしよう",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    // シーン5: 選択肢が登場するシーン
    scene5: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "授業中だし、休み時間に見よう",
                description: "ー休み時間ー",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "わからないように確認しちゃう",
                description: "先生に怒られた！！",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "B君からだった！今度公園でゲームをすることになった",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "親に連絡が行き、１週間スマホ禁止になった",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//小学生
export const etexts2 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "-総合の時間-",
        speaker: "ナレーター",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "「今日は歴史についての調べ学習です。内容はノートにまとめましょう。」",
        speaker: "先生",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "調べ学習苦手なんだよな。",
        speaker: "Aさん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "「ねぇ！この「歴史のすべて」ってサイト全部写せば完璧じゃない？」",
        speaker: "Bくん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    // シーン5: 選択肢が登場するシーン
    scene5: {
        text: "あなたはどちらを選びますか？",
        speaker: "ナレーター",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "自分で調べてまとめる",
                description: "S先生）Aさんのノートを見よう「織田信長は本能寺の変で討たれたとされています」",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "そのまま写す",
                description: "S先生）Aさんのノートを見よう「織田信長は食中毒で死にました？！」",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "ノート評価　Ａ⁺",
        speaker: "先生",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "ノート評価　C",
        speaker: "先生",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//中高生
export const jhtexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "Aさん、これ動画転載されてない？！",
        speaker: "Bくん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "え？ホントだ！親しい友達にしか共有してないのに、、",
        speaker: "Aさん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "これ誰なんだろう、、嫌だな...",
        speaker: "Aさん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン8: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "Bくん",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "投稿者に削除を依頼する",
                description: "投稿者に削除を依頼してみよう",
                iconId: "icon1",
                nextScene: "scenEend"
            },
            {
                title: "友人を問い詰める",
                description: "ちょっとどうゆうこと？？",
                iconId: "icon2",
                nextScene: "sceneEnd"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//中高生
export const jhtexts2 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ーネットサーフィン中ー",
        speaker: "ナレーター",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "このイラストかわいいな",
        speaker: "アヤ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "SNSのアイコンにしたい！",
        speaker: "アヤ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン8: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "Bくん",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "書いた人に許可を取ってから設定する",
                description: "書いた人に許可を取ってから設定しよう",
                iconId: "icon1",
                nextScene: "scenEend"
            },
            {
                title: "自分で使うだけだし、勝手に設定しちゃう",
                description: "自分で使うだけだし、勝手に設定しちゃおう。私的使用の範囲内だよね",
                iconId: "icon2",
                nextScene: "sceneEnd"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//専門大生
export const utexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "このバイトの時給、ほかのバイトと比べてすごく高いじゃん！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "時給は高いけどどんな仕事なんだろう？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    // シーン3: 選択肢が登場するシーン
    scene3: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "仕事内容わかんないし怖いからやめておこう",
                description: "",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "まあ時給高いし応募してみよ",
                description: "",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "ニュースで報道されていた\nやっぱり危ないバイトに申し込まなくて良かった！！",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "強盗！？どうみても犯罪だけど\n怖い人に囲まれてやめるにやめられない...",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//専門大生
export const utexts2 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "あ、ネットで知り合った子から連絡が来てる！！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "なになに...？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "一緒に投資をやってみないか？だって",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "最近流行ってるし、やるべきなのかな～？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    // シーン5: 選択肢が登場するシーン
    scene5: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "詐欺の可能性があるので断る",
                description: "",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "親密な関係なので了承する",
                description: "",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "ニュースで報道されていた\n詐欺にあわなくて良かったぁ！！",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "相手と連絡が取れなくなるし、お金も返ってこない...\n詐欺にあってしまった",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//専門大生
export const utexts3 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ピコン←スマホの音",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "SNSに友達申請が届いた",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "Gさん？知らない人だな",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン5: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "知らない人だし許可はやめておこう",
                description: "",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "Cちゃんの知り合いじゃん！許可しちゃえ",
                description: "",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "「Ｇさんって人と友達になったら住所とか流失したっぽくて」\nＡさん　「えっそうなの？！」許可しなくてよかった！！",
        speaker: "Cちゃん",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "ネットに自分の住所とか写真が流失してる、、\n調べたらGさんが流しているらしかった、、",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//会社員
export const ctexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ー仕事中ー",
        speaker: "ナレーター",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "「Aさんちょっといい？」",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "「はい！」",
        speaker: "Aさん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "パソコンをそのまま放置だと危ないし...",
        speaker: "Aさん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    // シーン5: 選択肢が登場するシーン
    scene5: {
        text: "あなたはどちらを選びますか？",
        speaker: "Aさん",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "[Win]キーと[L]キーを同時押しして席を外す",
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd"
            },
            {
                title: "[Win]キーと[.]キーを同時押しして席を外す",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd"
            }
        ]
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//会社員
export const ctexts2 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "来週の会社説明イベントの資料を送らなきゃだった！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "学生全員に送りたいけど、他の学生のメールアドレスは見せたくないな...",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "あれ、宛先はCc:とBcc:どっちに追加すればいいんだっけ？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン5: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "参加者の宛先を Cc:に追加した",
                description: "",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "参加者の宛先を Bcc:に追加した",
                description: "",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "まずい！宛先のアドレスが全員に公開されてしまった！",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "よし！問題なく送れているな",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
     }
};
//会社員
export const ctexts3 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "やべぇええ",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "仕事がおわらねぇぇえ",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "でも残業はしたくないなぁ～",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "データを家に持って帰って続きをやろうかな～",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    // シーン5: 選択肢が登場するシーン
    scene5: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "USBにデータをいれ、家に持ち帰ってやる",
                description: "家に帰る途中にUSBメモリを落として情報漏洩をしてしまった！！",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "上司に話して残業する",
                description: "T課長にめちゃんこ怒られた！！",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "会社で安全に仕事をすることができた！！",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "T課長に怒られずに済んだぜ！！",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//主婦・主夫
export const wtexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "今回の料理は、とっても良いものができたわね！！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "そうだ！！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "SNSに写真を投稿してみんなに見てもらおうかしら！！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン4: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "スマートフォンで撮影し、フィルター加工してから投稿した",
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd"
            },
            {
                title: "フィルムカメラで撮影し、PCで編集してから投稿した",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd"
            }
        ]
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//配信者
export const stexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "配信で使えるいい音楽、ないかな～？",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "あ、この曲いいじゃん！！",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "いい曲見つけたけどフリーBGMじゃないな～",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン4: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "レコード会社に問い合わせてみよう",
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd"
            },
            {
                title: "どうせバレないから使っちゃえ！",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd"
            }
        ]
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
//老後
export const otexts1 = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "「あ、ねぇおじいちゃん、実は、、」",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "「なんだって？！すぐに50万必要じゃと？！」",
        speaker: "じいちゃん",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "「じゃあおじいちゃんよろしくね～」",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "電話を切る",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene5"
    },
    scene5: {
        text: "ずいぶん急に大金が必要なんじゃな～",
        speaker: "タロウ",
        characterId: "character1",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene6"
    },
    // シーン5: 選択肢が登場するシーン
    scene6: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "一度孫に携帯で電話してみようかのう",
                description: "",
                iconId: "icon1",
                nextScene: "scene9"
            },
            {
                title: "孫のピンチじゃ！銀行に行かねば！",
                description: "",
                iconId: "icon2",
                nextScene: "scene10"
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "孫に「そんな電話してないよ」と言われた\n詐欺だとわかった",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "振り込んでしまった、お金が返ってこない...\n詐欺にあってしまった",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // 終了シーン
    sceneEnd: {
        text: "ゲームオーバー。ご利用ありがとうございました！",
        speaker: "システム",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1"
    }
};
