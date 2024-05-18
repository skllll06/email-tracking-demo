export interface Email {
  id: number;
  subject: string;
  body: string;
  from: string;
  to: string;
  sentAt: string;
  href: string; // 詳細ページへのリンク先 URL を追加
}
