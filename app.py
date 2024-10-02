from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # セッション管理用の秘密鍵

# 仮のユーザー情報（データベースと接続する場合はここを修正）
users = {'0001-seike': '0001-seike'}

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # 認証処理
        if username in users and users[username] == password:
            session['user'] = username  # セッションにユーザー情報を保存
            flash('Login successful!', 'success')
            return redirect(url_for('settings'))
        else:
            flash('Invalid ID or password', 'danger')

    return render_template('login.html')

@app.route('/settings')
def settings():
    # ログインしていない場合はログインページへリダイレクト
    if 'user' not in session:
        return redirect(url_for('login'))

    # 認証に成功した場合
    if request.method == 'POST':
        consumer_connector_url = request.form['consumer-connector']
        # コネクタ情報の保存
        session['consumer_connector_url'] = consumer_connector_url
        
    return render_template('settings.html', username=session['user'])

@app.route('/search')
def search():
    # ログインしていない場合はログインページへリダイレクト
    if 'user' not in session:
        return redirect(url_for('login'))
    return render_template('search.html', username=session['user'])

@app.route('/download')
def download():
    # ログインしていない場合はログインページへリダイレクト
    if 'user' not in session:
        return redirect(url_for('login'))
    return render_template('download.html', username=session['user'])

@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out.', 'info')
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
