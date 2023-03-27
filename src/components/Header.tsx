import { ChangeEvent, FormEvent } from 'react';
import { MagnifyingGlass } from './Icons';
import Link from 'next/link';

type Props = {
	onSubmit: (_event: FormEvent<HTMLFormElement>) => void;
	searchValue: string;
	onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
	inputName?: string;
};

/**
 * inputname => ``searchParam``
 *
 */
const Header = ({ onSubmit, searchValue, onChange, inputName }: Props) => (
	<header className="sticky top-0 px-5 bg-black text-white py-6 scroll-mb-6">
		<nav className="flex flex-col items-center sm:flex-row gap-4 sm:justify-between mx-auto container">
			<Link href="/" className="sm:flex-[0.2]">
				<h1 className="text-3xl font-extrabold">OnlyFakenews</h1>
				<p className="text-sm my-1 ml-2">
					The{' '}
					<span className="text-white bg-white/50 rounded px-0.5">
						news app
					</span>{' '}
					for dummies
				</p>
			</Link>
			<form
				onSubmit={onSubmit}
				className="flex items-center w-full text-black sm:flex-1"
			>
				<div className="sm:max-w-sm md:max-w-sm xl:max-w-xl  ml-auto w-full flex items-center">
					<input
						type="text"
						placeholder="Search article title"
						className="border px-5 py-2 rounded w-full"
						value={searchValue}
						onChange={onChange}
						name={inputName ?? 'searchParam'}
					/>
					<button
						aria-label="search"
						type="submit"
						className="rounded bg-black/80 -ml-10 text-white w-[42px] h-[42px] flex items-center justify-center"
					>
						<MagnifyingGlass />
					</button>
				</div>
			</form>
		</nav>
	</header>
);

export default Header;
