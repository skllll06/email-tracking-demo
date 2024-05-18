// src/app/page.tsx
'use client';

import EmailList from '@/app/components/EmailList';
import { Email } from '@/app/components/EmailList/types';

const dummyEmails: Email[] = [
	{
		id: 1,
		subject: '新製品の発売について',
		body: '株式会社〇〇様\n\nいつもお世話になっております。\n株式会社△△の□□です。\n\nさて、この度弊社では、新製品「〇〇」を発売することになりましたので、ご案内申し上げます。\n\nつきましては、貴社におかれましても、ぜひご検討いただけますようお願い申し上げます。\n\n...',
		from: 'Taro Yamada <example@example.com>',
		to: 'info@example.com',
		sentAt: '2024-05-17T12:34:56Z',
		href: '/emails/1',
	},
	{
		id: 2,
		subject: '【重要】サーバーメンテナンスのお知らせ',
		body: 'お客様各位\n\n平素は格別のご高配を賜り、厚く御礼申し上げます。\n\nさて、誠に勝手ながら、下記の日程でサーバーメンテナンスを実施させていただきます。\n\n...',
		from: 'support@example.com',
		to: 'info@example.com',
		sentAt: '2024-05-16T09:01:23Z',
		href: '/emails/2',
	},
	// ... 他のダミーメールデータ
];

export default function Home() {
	return (
		<section>
			<h2 className="mb-4 text-2xl font-bold text-white">受信トレイ</h2>
			<EmailList emails={dummyEmails} />
		</section>
	);
}
