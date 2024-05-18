## Email Tracking Demo for Order Management System

This project is a demo application for an order management system, built using Next.js. It allows you to efficiently manage email communication with customers by linking emails to specific projects and displaying them in threaded conversations.

### Key Features

- **Email Fetching and Display:** Automatically fetches emails from Gmail and stores them in a database. Fetched emails are displayed in a list view, grouped by project, and threaded conversations make it easy to review past interactions.
- **Project Management:** Register and manage basic project information (project name, client name, assignee, status, etc.).
- **Search Functionality:** Search for specific emails by project name, client name, email subject, or email body.
- **Filtering Functionality:** Filter emails by criteria such as unread emails or emails from specific clients.
- **Labeling Functionality:** Organize and categorize emails by assigning labels.

### Tech Stack

- **Frontend:** Next.js (TypeScript), React
- **Backend:** Next.js API Routes (TypeScript)
- **Database:** PostgreSQL
- **Email Server:** Gmail (IMAP)
- **Infrastructure:** Docker

### Development Environment

- **Node.js:** v18 or higher
- **pnpm:** Latest version
- **Docker:** Latest version
- **PostgreSQL:** Latest version

### Setup

1. Clone the repository.
2. Create a `.env.local` file and set the necessary environment variables. (e.g., `DATABASE_URL`, `GMAIL_USER`, `GMAIL_PASSWORD`)
3. Run `pnpm install` to install dependencies.
4. Run `docker-compose up -d` to start Docker containers.
5. Run `pnpm run dev` to start the development server.
6. Open `http://localhost:3000` in your browser.

### Development

- `pnpm run dev`: Starts the development server.
- `pnpm run build`: Creates a production build.
- `pnpm run start`: Starts the production server.
- `pnpm run lint`: Runs ESLint.
- `pnpm run format`: Runs Prettier.

### Notes

- This project is a demo application and is not suitable for production use.
- Please handle Gmail credentials and database connection information with care.
- Be mindful of spam filters when sending emails.
- This README may be updated from time to time.

### License

This project is licensed under the MIT License.

## 受発注システム「メールトラッキングデモ」

本プロジェクトは、Next.js を使用して構築された受発注システムのデモアプリケーションです。顧客とのメールのやり取りを案件ごとに紐付け、スレッド形式で表示することで、過去のコミュニケーション履歴を効率的に管理できます。

### 主な機能

- **メール受信・表示:** Gmail からメールを自動取得し、データベースに保存します。取得したメールは案件ごとに一覧表示し、スレッド形式で過去のやり取りを確認できます。
- **案件管理:** 案件の基本情報（案件名、顧客名、担当者、ステータスなど）を登録・管理します。
- **検索機能:** 案件名、顧客名、メール件名、メール本文などから目的のメールを検索できます。
- **フィルタリング機能:** 未読メール、特定の顧客からのメールなど、条件を指定してメールを絞り込めます。
- **ラベル付け機能:** メールにラベルを付けて分類し、整理できます。

### 技術スタック

- **フロントエンド:** Next.js (TypeScript), React
- **バックエンド:** Next.js API Routes (TypeScript)
- **データベース:** PostgreSQL
- **メールサーバー:** Gmail (IMAP)
- **インフラ:** Docker

### 開発環境

- **Node.js:** v18 以上
- **pnpm:** 最新版
- **Docker:** 最新版
- **PostgreSQL:** 最新版

### セットアップ

1. リポジトリをクローンします。
2. `.env.local` ファイルを作成し、必要な環境変数を設定します。（例: `DATABASE_URL`, `GMAIL_USER`, `GMAIL_PASSWORD`）
3. `pnpm install` で依存関係をインストールします。
4. `docker-compose up -d` で Docker コンテナを起動します。
5. `pnpm run dev` で開発サーバーを起動します。
6. ブラウザで `http://localhost:3000` にアクセスします。

### 開発

- `pnpm run dev`: 開発サーバーを起動します。
- `pnpm run build`: プロダクションビルドを作成します。
- `pnpm run start`: プロダクションサーバーを起動します。
- `pnpm run lint`: ESLint を実行します。
- `pnpm run format`: Prettier を実行します。

### 注意点

- 本プロジェクトはデモアプリケーションであり、本番環境での利用には適していません。
- Gmail の認証情報やデータベースの接続情報は、適切に管理してください。
- スパムフィルターに引っかからないよう、メール送信には注意してください。
- 本 README は随時更新される可能性があります。

### ライセンス

本プロジェクトは MIT ライセンスで公開されています。
