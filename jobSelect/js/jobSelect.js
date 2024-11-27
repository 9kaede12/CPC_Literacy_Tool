// 確認画面に遷移するときに職業名と職業画像を一緒に渡す
function confirmSelection(jobName, imgSrc) {
  window.location.href = `confirm.html?job=${encodeURIComponent(jobName)}&img=${encodeURIComponent(imgSrc)}`;
}

// 戻るボタンが押された時の遷移先ファイル
function goBack() {
  window.location.href = "index.html";
}
