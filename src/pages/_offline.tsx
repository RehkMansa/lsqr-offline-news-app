import Link from 'next/link';

const Offline = () => (
	<div className="fixed inset-0 bg-black grid place-items-center">
		<div>
			<p>You are offline</p>
			<Link href="/">Go back to home</Link>
		</div>
	</div>
);

export default Offline;
