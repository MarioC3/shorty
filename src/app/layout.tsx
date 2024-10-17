import type { Metadata } from 'next'
import '@styles/globals.css'
import { poppins } from '@/fonts'

export const metadata: Metadata = {
	title: 'Shorty',
	description: 'URL Shortener',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} mx-auto flex h-screen w-full max-w-[500px] flex-col bg-slate-50 p-4 text-slate-700 md:p-8`}
			>
				<div className="flex flex-1 flex-col items-center gap-12 pt-20 md:justify-center md:pt-0">
					<header>
						<h1 className="text-center text-4xl font-bold">Shorty</h1>
						<h2>
							A simple URL{' '}
							<span className="underline decoration-gray-500 decoration-wavy underline-offset-2">
								shortener
							</span>{' '}
							.
						</h2>
					</header>
					<main className="w-full">{children}</main>
				</div>
				<footer className="flex flex-col pb-0 text-center text-xs text-slate-500 md:pb-8">
					<span>Leland&apos;s take-home excercise.</span>
					<span>Made by Beto Carlos.</span>
				</footer>
			</body>
		</html>
	)
}
