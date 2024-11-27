// URLパラメータから選択された職業名と画像のパスを取得
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// はいボタンを押したときの処理
function confirmYes() {
  const jobName = getQueryParam('job');
  const imgSrc = getQueryParam('img');
  // 選択結果を次の画面に渡して遷移する
  window.location.href = `success.html?job=${jobName}&img=${imgSrc}`;
}

// いいえボタンを押したときの処理
function confirmNo() {
  window.history.back(); // 前のページに戻る
}

window.onload = function () {
  const jobName = getQueryParam('job');
  const imgSrc = getQueryParam('img');
  document.getElementById('job-name').textContent = jobName;
  document.getElementById('job-image').src = imgSrc;
};
