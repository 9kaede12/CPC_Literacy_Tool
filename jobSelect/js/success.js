// URLパラメータから選択された職業名と画像のパスを取得
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

window.onload = function () {
  const jobName = getQueryParam('job');
  const imgSrc = getQueryParam('img');
  document.getElementById('job-name').textContent = jobName;
  document.getElementById('job-image').src = imgSrc;
};

document.getElementById('next-button').addEventListener('click', () => {
  // 次の画面のURLを指定してください
  const nextPageURL = './next-page.html';
  window.location.href = nextPageURL;
});
