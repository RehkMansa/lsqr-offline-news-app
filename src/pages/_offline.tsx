import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Offline = () => {
	const router = useRouter();

	useEffect(() => {
		const url = window.location.href;

		console.log(url);

		if (url.includes('search')) {
		}
		if (url.includes('news')) {
			router.push('/news');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="fixed inset-0 bg-black grid place-items-center text-white">
			<Head>
				<title>Offline at the moment</title>
				<meta
					name="description"
					content="You are offline at the moment"
				/>
			</Head>
			<div className="space-y-6 text-sm max-w-md mx-auto px-5">
				<h2 className="text-xl sm:text-2xl font-semibold">
					You are offline at the moment
				</h2>
				<p className="">
					Only pages you have visited while online are available when
					offline, but for now, here are some precached pages
				</p>
				<div className="grid gap-4 underline text-blue-600">
					<Link href="/">You can visit the homepage</Link>
					<Link href="/search?type=title">
						Search for any Article
					</Link>
					<Link href="/news">Read recent articles</Link>
				</div>
			</div>
		</div>
	);
};

export default Offline;
