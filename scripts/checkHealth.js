// HTML が完全に読み込まれたら実行されるようにする
document.addEventListener('DOMContentLoaded', function () {
    // ボタン要素を取得し、クリックイベントを設定
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('click', fetchJsonData);
});

// サーバーから JSON データを取得する関数
async function fetchJsonData() {
    // リクエストを送信する URL
    const url = 'http://localhost:11001/api/check/health';

    // ステータスメッセージの要素を取得
    const jsonOutput = document.getElementById('json-output');
    jsonOutput.textContent = 'Fetching data...';

    try {
        // fetch を使って HTTP GET リクエストを送信
        const response = await fetch(url);

        // レスポンスが正常（200 OK）であれば、JSON データを取得して表示
        if (response.ok) {
            const data = await response.json(); // レスポンスを JSON として解析
            jsonOutput.textContent = JSON.stringify(data, null, 2); // JSON データを画面に表示（インデント付き）
        } else {
            jsonOutput.textContent = `Failed to fetch data: ${response.status} - ${response.statusText}`;
        }
    } catch (error) {
        // ネットワークエラーやその他のエラーをキャッチして表示
        jsonOutput.textContent = `Error: ${error.message}`;
    }
}
