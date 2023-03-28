import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { LogoutIcon, MagnifyingGlass, UserIcon } from './Icons';
import Link from 'next/link';

type Props = {
	onSubmit: (_event: FormEvent<HTMLFormElement>) => void;
	searchValue?: string;
	onChange?: (_event: ChangeEvent<HTMLInputElement>) => void;
	inputName?: string;
};

/**
 * inputname => ``searchParam``
 *
 */
const Header = ({ onSubmit, searchValue, onChange, inputName }: Props) => {
	const [showModal, setShowModal] = useState(false);
	const [userCredentials, setUserCredentials] = useState<string>();
	const [inputErr, setInputErr] = useState('');

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const {
			currentTarget: { elements: inputElements },
		} = e;
		if (
			'_ofnUsername' in inputElements &&
			inputElements._ofnUsername instanceof HTMLInputElement
		) {
			const searchTerm = inputElements._ofnUsername.value.trim();

			if (searchTerm.length > 1) {
				localStorage.setItem('_ofnUsername', searchTerm);
				setInputErr('');
				setUserCredentials(searchTerm);
				setShowModal(false);
			} else {
				setInputErr('Input field cannot be blank');
			}
		}
	};

	const handleModalToggle = () => {
		setShowModal(false);
		setInputErr('');
	};

	const handleLogin = (_showModal?: true) => {
		const user = localStorage.getItem('_ofnUsername');
		if (user) {
			setUserCredentials(user);
			setInputErr('');
		} else {
			setShowModal(true);
		}
	};

	useEffect(() => {
		const user = localStorage.getItem('_ofnUsername');
		if (user) {
			setUserCredentials(user);
			setInputErr('');
		}
	}, []);

	return (
		<>
			<header className="sticky top-0 px-5 bg-black text-white py-6 scroll-mb-6">
				<nav className="flex flex-col items-center sm:flex-row gap-4 sm:justify-between mx-auto container">
					<Link href="/" className="sm:flex-[0.2]">
						<h1 className="text-3xl font-extrabold">
							OnlyFakenews
						</h1>
						<p className="text-sm my-1 ml-2">
							The{' '}
							<span className="text-white bg-white/50 rounded px-0.5">
								news app
							</span>{' '}
							for dummies
						</p>
					</Link>
					<div className="flex flex-col sm:flex-row max-sm:w-full sm:flex-1 gap-4">
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

						{!userCredentials ? (
							<button
								className="flex justify-center gap-x-3 sm:flex-col items-center"
								onClick={() => handleLogin(true)}
							>
								<UserIcon />
								<span className="text-sm">Signin</span>
							</button>
						) : (
							<button
								className="flex justify-center gap-x-3 sm:flex-col items-center"
								onClick={() => setUserCredentials(undefined)}
							>
								<LogoutIcon />
								<span className="text-sm">
									Hello {userCredentials}!
								</span>
							</button>
						)}
					</div>
				</nav>
			</header>
			{showModal && (
				<dialog
					open={showModal}
					className="px-2 fixed inset-0 w-full h-full flex items-center overflow-y-auto bg-black/30 "
					onClick={handleModalToggle}
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="border max-w-md mx-auto bg-white w-full overflow-y-scroll p-5 z-[50] py-10 relative"
					>
						<button
							onClick={handleModalToggle}
							className="w-fit block ml-auto top-3 uppercase absolute right-5 text-xs"
						>
							Close
						</button>
						<form onSubmit={handleFormSubmit} className="space-y-4">
							<div className="space-y-1">
								<h2 className="text-2xl font-bold">Hello !</h2>
								<p>
									Create a username to signup for very fake
									news :)
								</p>
							</div>
							<div>
								<input
									type="text"
									placeholder="Enter username (e.g: fakeNewLover419)"
									className="border-2 border-black px-5 py-2 rounded w-full"
									name="_ofnUsername"
								/>
								{inputErr && (
									<p className="text-xs text-red-600">
										{inputErr}
									</p>
								)}
							</div>
							<button
								type="submit"
								className="block bg-black text-white rounded-md w-full py-2"
							>
								Sign Up
							</button>
						</form>
					</div>
				</dialog>
			)}
		</>
	);
};

export default Header;
