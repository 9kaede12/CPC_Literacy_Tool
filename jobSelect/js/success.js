// URLパラメータから指定されたパラメータの値を取得する関数
function getQueryParam(param) {
  // 現在のページURLのクエリ文字列部分を解析してパラメータを管理するオブジェクトを生成
  const params = new URLSearchParams(window.location.search);
  // 指定されたパラメータ名に対応する値を取得して返す
  return params.get(param);
}

// ページがロードされたときに実行される処理
window.onload = function () {
  // URLパラメータから職業名を取得
  const jobName = getQueryParam('job');
  // URLパラメータから画像のパスを取得
  const imgSrc = getQueryParam('img');
  // 職業名をHTML内の指定された要素に表示
  document.getElementById('job-name').textContent = jobName;
  // 職業画像をHTML内の指定された要素に表示
  document.getElementById('job-image').src = imgSrc;
};

// 次の画面に進むボタンのクリックイベントを設定
document.getElementById('next-button').addEventListener('click', () => {
  // 次の画面のURLを指定
  const nextPageURL = './next-page.html';
  // 指定されたURLに遷移する
  window.location.href = nextPageURL;
});
