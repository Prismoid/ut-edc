# UT-EDC
## ディレクトリ構成

```txt
.
├── Dockerfile
├── app.py
├── static
│   └── style.css
└── templates
    ├── download.html
    ├── login.html
    ├── search.html
    └── settings.html
```

## 実行方法

### コンテナの起動

```bash
docker compose build
docker compose up -d # ポートを指定する際は -p 3000:3000等とする。
```

### コンテナの停止
```bash
docker compose down
```