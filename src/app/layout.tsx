// src/app/layout.tsx
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body className="bg-background font-sans text-gray-200">
				<div className="flex min-h-screen flex-col">
					<header className="sticky top-0 z-50 bg-primary-900 p-4">
						<h1 className="text-2xl font-bold text-gray-100">
							メールトラッキングデモ
						</h1>
					</header>
					<main className="grow p-4">{children}</main>
					<footer className="bg-gray-800 p-4 text-center text-gray-300">
						<p>&copy; 2024 Email Tracking Demo</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
