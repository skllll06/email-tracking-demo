'use client';

import { render, screen } from '@testing-library/react';

import EmailListItem from '@/app/components/EmailList/Item';
import type { Email } from '@/app/components/EmailList/types';

describe('EmailListItem', () => {
	const email: Email = {
		id: 1,
		subject: 'Test Email',
		body: 'This is a test email.',
		from: 'sender@example.com',
		to: 'recipient@example.com',
		sentAt: '2024-01-01T00:00:00Z',
		href: '/emails/1',
	};

	it('renders email item with correct information', () => {
		render(<EmailListItem email={email} />);

		const subjectElement = screen.getByText(email.subject);
		const dateElement = screen.getByText(
			new Date(email.sentAt).toLocaleDateString(),
		);
		const fromElement = screen.getByText(`From: ${email.from}`);
		const toElement = screen.getByText(`To: ${email.to}`);
		const bodyPreviewElement = screen.getByText(
			email.body.slice(0, 50) + '...',
		);

		expect(subjectElement).toBeInTheDocument();
		expect(dateElement).toBeInTheDocument();
		expect(fromElement).toBeInTheDocument();
		expect(toElement).toBeInTheDocument();
		expect(bodyPreviewElement).toBeInTheDocument();
	});

	it('links to the correct email details page', () => {
		render(<EmailListItem email={email} />);

		const linkElement = screen.getByRole('link');
		expect(linkElement).toHaveAttribute('href', email.href);
	});
});
