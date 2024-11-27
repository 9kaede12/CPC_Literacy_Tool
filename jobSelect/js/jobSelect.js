// 確認画面に遷移するときに職業名と職業画像をURLパラメータとして渡す関数
function confirmSelection(jobName, imgSrc) {
  // 選択された職業名と画像パスをURLにエンコードしてconfirm.htmlに遷移
  window.location.href = `confirm.html?job=${encodeURIComponent(jobName)}&img=${encodeURIComponent(imgSrc)}`;
}

// 戻るボタンが押されたときに実行される処理
function goBack() {
  // ホーム画面（index.html）に遷移する
  window.location.href = "index.html";
}
