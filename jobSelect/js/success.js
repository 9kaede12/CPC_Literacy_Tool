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
  document.getElementById('job-name').textContent = jobName || '職業名が指定されていません';
  // 職業画像をHTML内の指定された要素に表示
  document.getElementById('job-image').src = imgSrc || 'default-image.jpg'; // デフォルト画像を設定
};

// 次の画面に進むボタンのクリックイベントを設定
document.getElementById('next-button').addEventListener('click', () => {
  // // 現在のURLを解析して1つ上の階層を取得
  // const currentPath = window.location.pathname;
  // const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/jobSelect/'));

  // // 現在のプロトコルとホストを含めたベースURLを作成
  // const baseURL = `${window.location.origin}${parentPath}/`;

  // // 次の画面の相対パス
  // const nextPageRelativePath = 'GameMain_code/game_page.html';

  // // 親階層を基に新しいURLを生成
  // const nextPageURL = new URL(nextPageRelativePath, baseURL);

  // // 指定されたURLに遷移する
  // window.location.href = nextPageURL.href;

  window.location.href = "../GameMain_code/game_page.html";
});
