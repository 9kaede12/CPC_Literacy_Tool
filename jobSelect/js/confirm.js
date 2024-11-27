// URLパラメータから指定されたパラメータの値を取得する関数
function getQueryParam(param) {
  // 現在のページURLのクエリ文字列部分を解析してパラメータを管理するオブジェクトを生成
  const params = new URLSearchParams(window.location.search);
  // 指定されたパラメータ名に対応する値を取得して返す
  return params.get(param);
}

// はいボタンを押したときの処理
function confirmYes() {
  // 現在のURLパラメータから職業名を取得
  const jobName = getQueryParam('job');
  // 現在のURLパラメータから画像パスを取得
  const imgSrc = getQueryParam('img');
  // 職業名と画像パスを次の画面に引き継ぎ、success.htmlに遷移する
  window.location.href = `success.html?job=${jobName}&img=${imgSrc}`;
}

// いいえボタンを押したときの処理
function confirmNo() {
  // 前のページに戻る（ブラウザの履歴を利用）
  window.history.back();
}

// ページがロードされたときに実行される初期化処理
window.onload = function () {
  // 現在のURLパラメータから職業名を取得
  const jobName = getQueryParam('job');
  // 現在のURLパラメータから画像パスを取得
  const imgSrc = getQueryParam('img');
  // HTML内の要素に職業名を反映
  document.getElementById('job-name').textContent = jobName;
  // HTML内の要素に画像パスを設定して画像を表示
  document.getElementById('job-image').src = imgSrc;
};
