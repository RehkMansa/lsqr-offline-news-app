import Head from 'next/head';
import Link from 'next/link';

const Offline = () => (
	<div className="fixed inset-0 bg-black grid place-items-center text-white">
		<Head>
			<title>Offline at the moment</title>
			<meta name="description" content="You are offline at the moment" />
		</Head>
		<div className="space-y-6 text-center">
			<h2 className="text-2xl capitalize font-semibold">
				You are offline at the moment
			</h2>
			<p className="max-w-xs mx-auto text-sm">
				Only pages you have visited while online are available when
				offline
			</p>
			<div className="flex items-center justify-center gap-4 text-xs">
				<Link
					className="px-6 bg-white/10 shadow shadow-white/20 rounded-full py-2"
					href="/"
				>
					Go back to home
				</Link>
				<Link
					className="px-6 bg-black/50 shadow shadow-white/20 rounded-full py-2"
					href="/search?type=title"
				>
					Search Article
				</Link>
			</div>
		</div>
	</div>
);

export default Offline;
