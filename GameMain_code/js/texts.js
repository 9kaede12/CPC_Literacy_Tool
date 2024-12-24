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
                nextScene: "scene9",
                isCorrect: true
            },
            {
                title: "とりあえず応募する",
                description: "今、どうしてもほしいブランドバックがあるけどお金がないから、ちょうどよかったー！\n応募しちゃおー！！",
                iconId: "icon2",
                nextScene: "scene10",
                isCorrect: false
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
export const etextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ー授業中ー",
        speaker: "タロウ",
        characterId: "1_小学生/com_classroom.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "ﾃｨﾝﾄﾝ♪",
        speaker: "タロウ",
        characterId: "1_小学生/com_sumaho_pikon.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "あ、だれかからメッセージが届いた",
        speaker: "タロウ",
        characterId: "",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "授業中だどうしよう",
        speaker: "タロウ",
        characterId: "1_小学生/12178_class_scene.png",
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
                description: "",
                iconId: "icon1",
                nextScene: "scene9",
                isCorrect: true
            },
            {
                title: "わからないように確認しちゃう",
                description: "",
                iconId: "icon2",
                nextScene: "scene10",
                isCorrect: false
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "ー休み時間ー\nB君からだった！今度公園でゲームをすることになった",
        speaker: "タロウ",
        characterId: "1_小学生/add_sumaho_reach_message",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    scene10: {
        text: "先生に怒られた！！",
        speaker: "タロウ",
        characterId: "1_小学生/18627_angry_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene11"
    },
    scene11: {
        text: "親に連絡が行き、１週間スマホ禁止になった",
        speaker: "タロウ",
        characterId: "1_小学生/cut_sumaho_ng.png",
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
export const etextsB = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "あ！このゲームずっとやりたかったやつだ！",
        speaker: "タロウ",
        characterId: "1_小学生/23746_tablet_boy.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "どうやったらプレイできるのかな～？",
        speaker: "タロウ",
        characterId: "1_小学生/19203_think_boy.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "ん？会員登録が必要なのか...",
        speaker: "タロウ",
        characterId: "1_小学生/add_allow_message_sumaho.png",
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
                title: "お母さんに相談してみよう",
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd",
                isCorrect: true
            },
            {
                title: "どうせばれないし勝手に登録しちゃえ",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd",
                isCorrect: false
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
//小学生
export const etextsC = {
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
        characterId: "1_小学生/9539_teacher_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "調べ学習苦手なんだよな。",
        speaker: "Aさん",
        characterId: "1_小学生/9430_read_book_girl_question.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "「ねぇ！この「歴史のすべて」ってサイト全部写せば完璧じゃない？」",
        speaker: "Bくん",
        characterId: "1_小学生/11813_pc_boy_light.png",
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
                description: "",
                iconId: "icon1",
                nextScene: "scene9",
                isCorrect: true
            },
            {
                title: "そのまま写す",
                description: "",
                iconId: "icon2",
                nextScene: "scene10",
                isCorrect: false
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "Aさんのノートを見よう「織田信長は本能寺の変で討たれたとされています」\nノート評価　Ａ⁺",
        speaker: "先生",
        characterId: "1_小学生/20776_stand_daimyou.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "Aさんのノートを見よう「織田信長は食中毒で死にました？！」\nノート評価　C",
        speaker: "先生",
        characterId: "1_小学生/12827_get_poison_man.png",
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
export const jhtextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "Aさーん！これ動画転載されてない？！",
        speaker: "Bくん",
        characterId: "2_中高生/18947_think_boy_student.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "え？ホントだ！親しい友達にしか共有してないのに、、",
        speaker: "Aさん",
        characterId: "2_中高生/19024_surprise_girl_student.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "これ誰なんだろう、、嫌だな...",
        speaker: "Aさん",
        characterId: "2_中高生/18996_trouble_girl_student.png",
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
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd",
                isCorrect: true
            },
            {
                title: "友人を問い詰める",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd",
                isCorrect: false
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
//はいしんしゃはいしんしゃ
export const jhtextsC = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ーネットサーフィン中ー",
        speaker: "ナレーター",
        characterId: "2_中高生/23570_yoyaku_woman_sumaho.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "このイラストかわいい！",
        speaker: "アヤ",
        characterId: "2_中高生/ori_icon_illust.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "SNSのアイコンにしたいな～",
        speaker: "アヤ",
        characterId: "2_中高生/7545_thinking_woman.png",
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
                nextScene: "sceneEnd",
                isCorrect: true
            },
            {
                title: "自分で使うだけだし、勝手に設定しちゃう",
                description: "自分で使うだけだし、勝手に設定しちゃおう。私的使用の範囲内だよね",
                iconId: "icon2",
                nextScene: "sceneEnd",
                isCorrect: false
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
export const jhtextsD = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "オンラインショッピングって便利だなー",
        speaker: "Bくん",
        characterId: "2_中高生/8365_shopping_man_sumaho.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "保護者の同意？得てないけど、とりあえず同意するにチェックしちゃおっと",
        speaker: "Bくん",
        characterId: "2_中高生/21373_check_survey_sumaho.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "あれ？！１５万円もするの？！",
        speaker: "Bくん",
        characterId: "2_中高生/18967_surprise_boy_student.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "どうしよう、、、",
        speaker: "Bくん",
        characterId: "2_中高生/18940_trouble_boy_student.png",
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
                title: "嘘をついて契約したので、取り消しはできない",
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd",
                isCorrect: true
            },
            {
                title: "未成年なので、法定代理人が取り消しできる",
                description: "",
                iconId: "icon2",
                nextScene: "scene10",
                isCorrect: false
            }
        ]
    },
    
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "嘘をついて契約しちゃったから取り消しできなかった\n１５万かあ、、",
        speaker: "先生",
        characterId: "2_中高生/18925_cry_boy_student.png",
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
export const utextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "このバイトの時給、ほかのバイトと比べてすごく高いじゃん！！",
        speaker: "タロウ",
        characterId: "3_専門大生/11813_pc_man_light.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "時給は高いけどどんな仕事なんだろう？",
        speaker: "タロウ",
        characterId: "3_専門大生/11829_pc_man_negative.png",
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
                title: "仕事内容わかんないし怖いから、他を探そう",
                description: "",
                iconId: "icon1",
                nextScene: "scene4",
                isCorrect: true
            },
            {
                title: "まあ時給高いし応募してみよ",
                description: "",
                iconId: "icon2",
                nextScene: "scene5",
                isCorrect: false
            }
        ]
    },
    scene4: {
        text: "ニュースで報道されていた",
        speaker: "タロウ",
        characterId: "3_専門大生/20508_newscaster_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene6"
    },
    scene6: {
        text: "やっぱり危ないバイトだったみたい。申し込まなくて良かった！！",
        speaker: "タロウ",
        characterId: "3_専門大生/943_hacker_man_white.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    scene5: {
        text: "強盗！？どうみても犯罪だよね、、",
        speaker: "タロウ",
        characterId: "3_専門大生/cut_hushinsya_face.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene7"
    },
    scene7: {
        text: "怖い人に囲まれてやめるにやめられない...",
        speaker: "タロウ",
        characterId: "3_専門大生/18541_cry_man_cc716B6B.png",
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
export const utextsB = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "あ、ネットで知り合った子から連絡が来てる！！",
        speaker: "タロウ",
        characterId: "3_専門大生/23562_yoyaku_man_sumaho.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "一緒に投資をやってみないか？だって",
        speaker: "タロウ",
        characterId: "3_専門大生/23562_yoyaku_man_sumaho.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "最近流行ってるし、やるべきなのかな～？",
        speaker: "タロウ",
        characterId: "3_専門大生/9289_explain_invest_woman.png",
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
                title: "詐欺の可能性があるので断る",
                description: "",
                iconId: "icon1",
                nextScene: "scene5",
                isCorrect: true
            },
            {
                title: "親密な関係なので了承する",
                description: "",
                iconId: "icon2",
                nextScene: "scene6",
                isCorrect: false
            }
        ]
    },
    scene5: {
        text: "ニュースで報道されていた",
        speaker: "タロウ",
        characterId: "3_専門大生/20508_newscaster_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene7"
    },
    scene7: {
        text: "詐欺にあわなくて良かった！",
        speaker: "タロウ",
        characterId: "3_専門大生/18577_angry_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    scene6: {
        text: "相手と連絡が取れなくなるし、お金も返ってこない...",
        speaker: "タロウ",
        characterId: "3_専門大生/18548_trouble_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    scene8: {
        text: "詐欺にあってしまった",
        speaker: "タロウ",
        characterId: "3_専門大生/1080_shock_man_ccFCBB4A.png",
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
export const utextsC = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ピコン♪",
        speaker: "タロウ",
        characterId: "3_専門大生/com_sumaho_pikon.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "SNSに友達申請が届いた",
        speaker: "タロウ",
        characterId: "3_専門大生/23562_yoyaku_man_sumaho.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "Gさん？知らない人だな",
        speaker: "タロウ",
        characterId: "3_専門大生/7672_worry_man.png",
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
                nextScene: "scene9",
                isCorrect: true
            },
            {
                title: "Cちゃんの知り合いじゃん！許可しちゃえ",
                description: "",
                iconId: "icon2",
                nextScene: "scene10",
                isCorrect: false
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene9: {
        text: "「Ｇさんって人と友達になったら住所とか流失したっぽくて」",
        speaker: "Cちゃん",
        characterId: "3_専門大生/11003_kaiwa_two_peoples.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene11"
    },
    scene11: {
        text: "「えっそうなの？！」許可しなくてよかった！！",
        speaker: "Aさん",
        characterId: "3_専門大生/11363_glad_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene10: {
        text: "「Ｇさんって人と友達になったら住所とか流失したっぽくて」",
        speaker: "cちゃん",
        characterId: "3_専門大生/cut_crying_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene12"
    },
    scene12: {
        text: "「 えっ！」　私も住所とか写真が流失してる、、",
        speaker: "Aさん",
        characterId: "3_専門大生/7672_worry_man.png",
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
export const ctextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ー仕事中ー",
        speaker: "ナレーター",
        characterId: "4_会社員/17507_pg_man_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "Aさんちょっといい？",
        speaker: "T課長",
        characterId: "4_会社員/13542_have_pc_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "はい！",
        speaker: "Aさん",
        characterId: "4_会社員/17507_pg_man_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "パソコンをそのまま放置だと危ないよね！",
        speaker: "Aさん",
        characterId: "4_会社員/17507_pg_man_buss.png",
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
                nextScene: "sceneEnd",
                isCorrect: true
            },
            {
                title: "[Win]キーと[.]キーを同時押しして席を外す",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd",
                isCorrect: false
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
export const ctextsB = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "来週の会社説明イベントの資料を送らなきゃだった！",
        speaker: "タロウ",
        characterId: "4_会社員/18912_surprise_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "学生全員に送りたいけど、他の学生のメールアドレスは見せたくないな...",
        speaker: "タロウ",
        characterId: "4_会社員/18890_think_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "あれ、宛先はCc:とBcc:どっちに追加すればいいんだっけ？",
        speaker: "タロウ",
        characterId: "4_会社員/18890_think_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "タロウ",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "参加者の宛先を Bcc:に追加した",
                description: "",
                iconId: "icon1",
                nextScene: "scene5",
                isCorrect: true
            },
            {
                title: "参加者の宛先を Cc:に追加した",
                description: "",
                iconId: "icon2",
                nextScene: "scene6",
                isCorrect: false
            }
        ]
    },
    scene5: {
        text: "まずい！宛先のアドレスが全員に公開されてしまった！",
        speaker: "タロウ",
        characterId: "4_会社員/18883_trouble_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    scene6: {
        text: "よし！問題なく送れているな",
        speaker: "タロウ",
        characterId: "4_会社員/18919_admire_woman_buss.png",
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
export const ctextsC = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "まずい",
        speaker: "タロウ",
        characterId: "4_会社員/15769_look_watch_trouble_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "仕事がおわらない！",
        speaker: "タロウ",
        characterId: "4_会社員/17038_pc_woman_buss_negative.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "データを家に持って帰ってやろうかな",
        speaker: "タロウ",
        characterId: "4_会社員/17038_pc_woman_buss_negative.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン4: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "ナレーター",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "上司に話して残業する",
                description: "",
                iconId: "icon1",
                nextScene: "scene5",
                isCorrect: true
            },
            {
                title: "USBメモリにデータをいれ、家に持ち帰ってやる",
                description: "",
                iconId: "icon2",
                nextScene: "scene6",
                isCorrect: false
            }
        ]
    },
    scene5: {
        text: "家に帰る途中にUSBメモリを落として情報漏洩をしてしまった！！",
        speaker: "タロウ",
        characterId: "4_会社員/1101_soulless_woman_buss.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene7"
    },
    scene7: {
        text: "T課長にめちゃんこ怒られた、、",
        speaker: "タロウ",
        characterId: "4_会社員/15599_donaru_jyoushi.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene6: {
        text: "残業してなんとか終わりにした！",
        speaker: "タロウ",
        characterId: "4_会社員/17023_pc_woman_buss_light.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    scene8: {
        text: "T課長に褒められて気分も評価もUP♪",
        speaker: "タロウ",
        characterId: "4_会社員/16918_sales_up_woman_buss.png",
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
export const wtextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "一息ついて、スマホを開いた",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/7077_use_sumaho_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "ん？何のメールだろう",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/7077_use_sumaho_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "「不要な方はこちらをクリック？？」",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/7674_worry_woman.png",
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
                title: "クリックせずに消す",
                description: "見覚えがないメールだし、開かず消してしまおう",
                iconId: "icon1",
                nextScene: "scene6",
                isCorrect: true
            },
            {
                title: "クリックして解除する",
                description: "要らないし、クリックしてメールの配信を解除しなきゃ",
                iconId: "icon2",
                nextScene: "scene7",
                isCorrect: false
            }
        ]
    },
    scene6: {
        text: "知らない間に壺を買っていることになっていた！",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/cut_trouble_woman_face.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    scene8: {
        text: "請求12万円！？",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/1330_money_bill.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene7: {
        text: "要らないメールがないだけでメールBOXが見やすいな",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/cut_notice_woman_face.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene9"
    },
    scene9: {
        text: "あ！！ライブの当選メールきてるじゃん！！！",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/cut_notice_woman_face.png",
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
export const wtextsB = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "息子の入学式とても感動したな～",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/13632_myojo_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "そうだ！！",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/cut_solve_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "インスタグラムに写真をアップしてみんなに見てもらおう！！",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/com_nyugakushiki_son.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "名札が写ってるけど大丈夫かな？",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/cut_worry_woman.png",
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
                title: "投稿を控えた",
                description: "",
                iconId: "icon1",
                nextScene: "scene6",
                isCorrect: true
            },
            {
                title: "名札だけ塗りつぶして投稿しよう",
                description: "",
                iconId: "icon2",
                nextScene: "scene7",
                isCorrect: false
            }
        ]
    },
    scene6: {
        text: "息子の名前と名札の透けた写真がコメント欄に貼られていた！",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/cut_worry_woman.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },    
    scene7: {
        text: "息子が楽しい学校生活を送れるといいな",
        speaker: "Aさん",
        characterId: "5_主夫・主婦/com_nyugakushiki_son.png",
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
export const wtextsC = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "今回のお弁当は、とってもおいしそうにできたわ！！",
        speaker: "アヤ",
        characterId: "5_主夫・主婦/coｍ_ready_obenntou.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "そうだ！！",
        speaker: "アヤ",
        characterId: "5_主夫・主婦/16573_point_woman_apron.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "SNSに写真を投稿してみんなに見てもらおうかしら！！",
        speaker: "アヤ",
        characterId: "5_主夫・主婦/16573_point_woman_apron.png",
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
                title: "フィルムカメラで撮影し、PCで編集してから投稿した",
                description: "",
                iconId: "icon1",
                nextScene: "sceneEnd",
                isCorrect: true
            },
            {
                title: "スマートフォンで撮影し、フィルター加工してから投稿した",
                description: "",
                iconId: "icon2",
                nextScene: "sceneEnd",
                isCorrect: false
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
export const stextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "配信で使えるいい音楽、ないかな～？",
        speaker: "タロウ",
        characterId: "6_配信者/11829_pc_man_negative.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "あ、この曲いいじゃん！！",
        speaker: "タロウ",
        characterId: "6_配信者/11813_pc_man_light.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "いい曲見つけたけどフリーBGMじゃないな～",
        speaker: "タロウ",
        characterId: "6_配信者/11829_pc_man_negative.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    // シーン4: 選択肢が登場するシーン
    scene4: {
        text: "あなたはどちらを選びますか？",
        speaker: "ナレーター",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "レコード会社に問い合わせてみよう",
                description: "",
                iconId: "icon1",
                nextScene: "scene5",
                isCorrect: true
            },
            {
                title: "どうせバレないから使っちゃえ！",
                description: "",
                iconId: "icon2",
                nextScene: "scene6",
                isCorrect: false
            }
        ]
    },
    scene5: {
        text: "問題なくに使うことができた！！",
        speaker: "Aさん",
        characterId: "6_配信者/964_youtuber_man_screen.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene6: {
        text: "レコード会社に訴えられてしまった！！",
        speaker: "Aさん",
        characterId: "6_配信者/14623_lawyer_ng_man.png",
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
//配信者
export const stextsB = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "･･･ざわざわ",
        speaker: "大衆",
        characterId: "",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "「レジを開けろ、金を出せ！」",
        speaker: "男の声",
        characterId: "6_配信者/23931_goto_settouhan.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "動画を撮らなきゃ！！",
        speaker: "タロウ",
        characterId: "6_配信者/20389_vlogger_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "近づいたら危ないし投稿して拡散するべきかな？",
        speaker: "タロウ",
        characterId: "6_配信者/7672_worry_man.png",
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
                title: "警察に証拠として提出しよう！",
                description: "",
                iconId: "icon1",
                nextScene: "scene7",
                isCorrect: true
            },
            {
                title: "SNSに投稿し、拡散を依頼しよう",
                description: "",
                iconId: "icon2",
                nextScene: "scene6",
                isCorrect: false
            }
        ]
    },
    scene7: {
        text: "警察にも感謝されて、犯人も逮捕できたみたいだ",
        speaker: "Aさん",
        characterId: "6_配信者/1394_police_man_stand.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    scene8: {
        text: "いいことをすると気持ちがいいな",
        speaker: "Aさん",
        characterId: "6_配信者/13610_myojo_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene6: {
        text: "え！SNSめちゃくちゃ炎上してる",
        speaker: "Aさん",
        characterId: "6_配信者/11829_pc_man_negative.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene9"
    },
    scene9: {
        text: "著作権侵害で裁判所から訴状が届いちゃった、、",
        speaker: "Aさん",
        characterId: "6_配信者/14623_lawyer_ng_man.png",
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
//配信者
export const stextsC = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "ゲーム雑魚くね？？？ｗｗｗｗｗ",
        speaker: "コメント欄",
        characterId: "6_配信者/942_hacker.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "ゲーム雑魚くねってコメント来てる",
        speaker: "Aさん",
        characterId: "6_配信者/7543_thinking_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    // シーン4: 選択肢が登場するシーン
    scene3: {
        text: "あなたはどちらを選びますか？",
        speaker: "ナレーター",
        characterId: "character7",
        backgroundId: "background1",
        fontId: "font1",
        choices: [
            {
                title: "「人には人の感じ方があるからね。コメントありがとう」",
                description: "",
                iconId: "icon1",
                nextScene: "scene4",
                isCorrect: true
            },
            {
                title: "「お前のほうが雑魚だからばーかばーか！」",
                description: "",
                iconId: "icon2",
                nextScene: "scene5",
                isCorrect: false
            }
        ]
    },
    scene4: {
        text: "配信大炎上で収拾つかなくなった\n会社員とかのほうが楽なのかな、、",
        speaker: "Aさん",
        characterId: "6_配信者/7672_worry_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene5: {
        text: "大人の対応をしたことでSNSで少しバズった",
        speaker: "Aさん",
        characterId: "6_配信者/964_youtuber_man_screen.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene6"
    },
    scene6: {
        text: "登録者も増えてうれしいな！！",
        speaker: "Aさん",
        characterId: "6_配信者/8192_have_calc_man.png",
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
//老後
export const otextsA = {
    // シーン1: キャラクター同士の会話
    scene1: {
        text: "「あ、ねぇおじいちゃん、実は、、」",
        speaker: "孫？",
        characterId: "7_老後/19520_call_ phone_man_senior.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene2"
    },
    scene2: {
        text: "「なんだって？！すぐに50万必要じゃと？！」",
        speaker: "じいちゃん",
        characterId: "7_老後/19530_call_phone_trouble_man_senior.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene3"
    },
    scene3: {
        text: "「じゃあおじいちゃんよろしくね～」",
        speaker: "孫？",
        characterId: "7_老後/19530_call_phone_trouble_man_senior.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene4"
    },
    scene4: {
        text: "ずいぶん急に大金が必要なんじゃな～",
        speaker: "じいちゃん",
        characterId: "7_老後/1330_money_bill.png",
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
                title: "一度孫に携帯で電話してみようかのう",
                description: "",
                iconId: "icon1",
                nextScene: "scene6",
                isCorrect: true
            },
            {
                title: "孫のピンチじゃ！銀行に行かねば！",
                description: "",
                iconId: "icon2",
                nextScene: "scene7",
                isCorrect: false
            }
        ]
    },
    // シーン9: 応募しない選択をした場合のシーン
    scene6: {
        text: "孫に「そんな電話してないよ」と言われた",
        speaker: "タロウ",
        characterId: "7_老後/19619_call_sumaho_trouble_man.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "scene8"
    },
    scene8: {
        text: "詐欺だとわかった",
        speaker: "タロウ",
        characterId: "7_老後/1394_police_man_stand.png",
        backgroundId: "background1",
        fontId: "font1",
        nextScene: "sceneEnd"
    },
    // シーン10: 応募する選択をした場合のシーン
    scene7: {
        text: "振り込んでしまった、お金が返ってこない...\n詐欺にあってしまった",
        speaker: "タロウ",
        characterId: "7_老後/19037_cry_man_senior.png",
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
