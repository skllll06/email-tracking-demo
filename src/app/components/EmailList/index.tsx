// src/app/components/EmailList.tsx
'use client';

import { FC } from 'react';

import EmailListItem from '@/app/components/EmailList/Item';
import { Email } from '@/app/components/EmailList/types';

export interface EmailListProps {
	emails: Email[];
}

const EmailList: FC<EmailListProps> = ({ emails }) => {
	return (
		<div className="overflow-hidden rounded-md bg-gray-800 shadow">
			<ul role="list" className="divide-y divide-gray-700">
				{emails.map((email) => (
					<EmailListItem key={email.id} email={email} />
				))}
			</ul>
		</div>
	);
};
export default EmailList;
