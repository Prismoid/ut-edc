// HTML のロード後に実行されるように、DOMContentLoaded イベントを使用
document.addEventListener('DOMContentLoaded', function () {
    // ボタン要素を取得し、クリックイベントを設定
    const requestButton = document.getElementById('requestButton');
    getStatus.addEventListener('click', getStatus);
});

// JavaScript で HTTP POST リクエストを送信する関数
async function getStatus() {
    // Authorization ヘッダーの Bearer トークンを入力する（または定義）
    const bearerToken = "ApiKeyDefaultValue";

    // リクエストの URL
    const url = "http://localhost:11001/api/check/health";


    // HTTP リクエストの設定
    const options = {
        method: 'GET', // HTTP メソッドを POST に設定
        headers: {
            'Authorization': `Bearer ${bearerToken}`, // Authorization ヘッダーに Bearer トークンを指定
            'Content-Type': 'application/json' // リクエストの Content-Type を JSON に設定
        },
        body: JSON.stringify(requestBody) // リクエストボディを JSON 文字列に変換
    };

    // ステータスメッセージの要素を取得
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = 'Sending request...';

    try {
        // fetch を使って HTTP リクエストを送信
        const response = await fetch(url, options);

        // レスポンスのステータスコードを確認
        if (response.ok) {
            const data = await response.json();  // レスポンスを JSON として解析
            statusMessage.textContent = 'Request successful! Response: ' + JSON.stringify(data, null, 2);
        } else {
            statusMessage.textContent = 'Request failed with status: ' + response.status + ' - ' + response.statusText;
        }
    } catch (error) {
        // エラーが発生した場合の処理
        statusMessage.textContent = 'Request failed: ' + error.message;
    }
}

// JavaScript で HTTP POST リクエストを送信する関数
async function sendRequest() {
    // Authorization ヘッダーの Bearer トークンを入力する（または定義）
    const bearerToken = "ApiKeyDefaultValue";

    // リクエストの URL
    const url = "http://localhost/v3/catalog/request";

    // リクエストボディの JSON データ
    const requestBody = {
        "@context": {
            "edc": "https://w3id.org/edc/v0.0.1/ns/"
        },
        "counterPartyAddress": "http://localhost:11003/api/v1/dsp",
        "protocol": "dataspace-protocol-http"
    };

    // HTTP リクエストの設定
    const options = {
        method: 'POST', // HTTP メソッドを POST に設定
        headers: {
            'Authorization': `Bearer ${bearerToken}`, // Authorization ヘッダーに Bearer トークンを指定
            'Content-Type': 'application/json' // リクエストの Content-Type を JSON に設定
        },
        body: JSON.stringify(requestBody) // リクエストボディを JSON 文字列に変換
    };

    // ステータスメッセージの要素を取得
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = 'Sending request...';

    try {
        // fetch を使って HTTP リクエストを送信
        const response = await fetch(url, options);

        // レスポンスのステータスコードを確認
        if (response.ok) {
            const data = await response.json();  // レスポンスを JSON として解析
            statusMessage.textContent = 'Request successful! Response: ' + JSON.stringify(data, null, 2);
        } else {
            statusMessage.textContent = 'Request failed with status: ' + response.status + ' - ' + response.statusText;
        }
    } catch (error) {
        // エラーが発生した場合の処理
        statusMessage.textContent = 'Request failed: ' + error.message;
    }
}
