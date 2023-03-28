import Header from '@/components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewsArticle from '@/data/news.json';
import { Star, ArrowUpOutlined } from '@/components/Icons';
import { useEffect, useState } from 'react';

const SinglePostsPage = () => {
	const router = useRouter();
	const { news } = NewsArticle;

	const [currentArticle, setCurrentArticle] = useState<typeof news[number]>();

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const {
			currentTarget: { elements: inputElements },
		} = e;
		if (
			'searchParam' in inputElements &&
			inputElements.searchParam instanceof HTMLInputElement
		) {
			const searchTerm = inputElements.searchParam.value.trim();

			localStorage.setItem('searchParam', searchTerm);
			router.push(`/search?type=title`);
		}
	};

	useEffect(() => {
		const articleID = localStorage.getItem('articleID');

		if (articleID) {
			const article = news.find(({ id }) => id === articleID);
			if (article) {
				setCurrentArticle(article);
			} else {
				router.push('/');
			}
		} else {
			router.push('/');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="font-sans">
			<Head>
				<title>Single post</title>
			</Head>
			<Header onSubmit={handleSearch} />
			<section className="container px-5 py-8 mx-auto space-y-8">
				{currentArticle && (
					<>
						<div className="flex justify-between gap-4">
							<div>
								<h2 className="text-2xl sm:text-3xl font-bold">
									{currentArticle.title}
								</h2>
								<div className="flex items-center gap-4 mt-2 flex-wrap">
									<div className="flex">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star
												fill={`${
													star <
													currentArticle.rating.rating
														? '#3F484A'
														: 'none'
												}`}
												className={`${
													star <
													currentArticle.rating.rating
														? 'text-[#3F484A]'
														: ''
												}`}
												key={star}
											/>
										))}
										{currentArticle.rating.rating}
									</div>
									<div>
										<p>
											Author:{' '}
											<a
												href={`mailto:${currentArticle.author.email}`}
												className="bg-black/80 text-white rounded px-2"
											>
												{currentArticle.author.name}
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="space-y-2 md:mr-6">
								<div className="bg-black text-white rounded-full p-1">
									<ArrowUpOutlined />
								</div>
								<div className="-scale-y-100 bg-black text-white rounded-full p-1">
									<ArrowUpOutlined />
								</div>
							</div>
						</div>
						<div
							dangerouslySetInnerHTML={{
								__html: currentArticle.story_content,
							}}
							className="space-y-3"
						></div>
					</>
				)}
			</section>
		</div>
	);
};

export default SinglePostsPage;
