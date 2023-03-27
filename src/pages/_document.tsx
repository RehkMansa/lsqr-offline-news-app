import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="theme-color" content="#000000"></meta>
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
