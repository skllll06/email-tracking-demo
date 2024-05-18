import Link from 'next/link';

import { Email } from '@/app/components/EmailList/types';

type Props = {
	email: Email;
};

const EmailListItem: React.FC<Props> = ({ email }) => {
	const formattedDate = new Date(email.sentAt).toLocaleDateString();

	return (
		<li id={`${email.id}`}>
			<Link href={email.href} className="block hover:bg-gray-700">
				<div className="p-4 sm:px-6">
					<div className="flex items-center justify-between">
						<p className="truncate text-sm font-medium text-primary-500">
							{email.subject}
						</p>
						<div className="ml-2 flex shrink-0">
							<p className="inline-flex rounded-full bg-gray-900 px-2 text-xs font-semibold leading-5 text-gray-300">
								{formattedDate}
							</p>
						</div>
					</div>
					<div className="mt-2 sm:flex sm:justify-between">
						<div className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
							<p>{email.body.slice(0, 50)}...</p>
						</div>
						<div className="sm:flex">
							<p className="flex items-center text-sm text-gray-400">
								From: {email.from}
							</p>
							<p className="mt-2 flex items-center text-sm text-gray-400 sm:ml-6 sm:mt-0">
								To: {email.to}
							</p>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default EmailListItem;
