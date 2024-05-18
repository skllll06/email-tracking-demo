# ベースイメージとして Node.js を指定
FROM node:18-alpine

# 作業ディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install -g pnpm

# ソースコードをコピー
COPY . .

# 環境変数を設定 (ポート番号など)
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# ポートを開放
EXPOSE 3000

# コンテナ起動時に実行するコマンド
CMD ["pnpm", "run", "dev"]
