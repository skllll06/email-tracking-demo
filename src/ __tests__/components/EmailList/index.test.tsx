'use client';
import { render, screen } from '@testing-library/react';

import EmailList from '@/app/components/EmailList';
import type { Email } from '@/app/components/EmailList/types';

describe('EmailList', () => {
	const emails: Email[] = [
		{
			id: 1,
			subject: 'Test Email 1',
			body: 'This is a test email.',
			from: 'sender1@example.com',
			to: 'recipient1@example.com',
			sentAt: '2024-01-01T00:00:00Z',
			href: '/emails/1',
		},
		{
			id: 2,
			subject: 'Test Email 2',
			body: 'This is another test email.',
			from: 'sender2@example.com',
			to: 'recipient2@example.com',
			sentAt: '2024-01-02T00:00:00Z',
			href: '/emails/2',
		},
	];

	it('サブジェクトをレンダリング', () => {
		render(<EmailList emails={emails} />);
		emails.forEach((email) => {
			const subjectElement = screen.getByText(email.subject);
			expect(subjectElement).toBeInTheDocument();
		});
	});

	it('dateをレンダリング', () => {
		render(<EmailList emails={emails} />);
		emails.forEach((email) => {
			const dateElement = screen.getByText(
				new Date(email.sentAt).toLocaleDateString(),
			);
			expect(dateElement).toBeInTheDocument();
		});
	});

	it('fromElementをレンダリング', () => {
		render(<EmailList emails={emails} />);
		emails.forEach((email) => {
			const fromElement = screen.getByText(`From: ${email.from}`);
			expect(fromElement).toBeInTheDocument();
		});
	});

	it('toElementをレンダリング', () => {
		render(<EmailList emails={emails} />);
		emails.forEach((email) => {
			const toElement = screen.getByText(`To: ${email.to}`);
			expect(toElement).toBeInTheDocument();
		});
	});

	it('bodyPreviewElementをレンダリング', () => {
		render(<EmailList emails={emails} />);
		emails.forEach((email) => {
			const bodyPreviewElement = screen.getByText(
				email.body.slice(0, 50) + '...',
			);
			expect(bodyPreviewElement).toBeInTheDocument();
		});
	});
});
