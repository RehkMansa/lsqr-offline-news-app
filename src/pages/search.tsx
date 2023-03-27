import Header from '@/components/Header';
import BlogListItem from '@/components/BlogListItem';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { news } from '@/data/news.json';

/* export const getServerSideProps: GetServerSideProps<{
	data: typeof NewsResponse['news'];
	queryParam: string;
}> = async ({ query }) => {
	if (!query.q) {
		return {
			notFound: true,
		};
	}

	const data = NewsResponse.news.filter(({ title }) =>
		title.toLowerCase().includes(query.q?.toString().toLowerCase() ?? '')
	);

	return {
		props: { data, queryParam: query.q.toString() },
	};
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
 */
const Search = () => {
	const router = useRouter();

	const [searchParam, setSearchParam] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			'searchParam' in e.currentTarget.elements &&
			e.currentTarget.elements.searchParam instanceof HTMLInputElement
		) {
			const searchTerm =
				e.currentTarget.elements.searchParam.value.trim();

			setSearchParam(searchTerm);
			localStorage.setItem('searchParam', searchTerm);
		}
	};

	const getSearchParam = () => {
		if ('type' in router.query) {
			const str = localStorage.getItem('searchParam');
			console.log(str);
			setSearchParam(str ?? '');

			localStorage.removeItem('searchParam');
		}
	};

	const filteredNews = news.filter(({ title }) =>
		title.toLowerCase().includes(searchParam.toLowerCase() ?? '')
	);

	useEffect(() => {
		getSearchParam();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section>
			<Head>
				<title>Search - {searchParam}</title>
				<meta name="description" content="Fake news Fake you" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Header onSubmit={handleSubmit} />
			<section className="container mx-auto px-2 py-14  space-y-8 xl:px-[5%]">
				{searchParam && (
					<h2 className=" text-xl sm:text-2xl font-bold text-center leading-normal">
						You are viewing {filteredNews.length} results for{' '}
						<span className="text-white bg-black/50 rounded px-1">
							{searchParam}
						</span>
					</h2>
				)}
				<ul
					role="list"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 odd"
				>
					{filteredNews.length > 0 ? (
						filteredNews.map((newsContent) => (
							<BlogListItem
								key={newsContent.id}
								{...newsContent}
							/>
						))
					) : (
						<div>No search Result found</div>
					)}
				</ul>
			</section>
		</section>
	);
};

export default Search;
