import Header from '@/components/Header';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import NewsResponse from '@/data/news.json';
import BlogListItem from '@/components/BlogListItem';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps<{
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

const Search = ({ queryParam, data }: Props) => {
	//
	const [searchParam, setSearchParam] = useState(queryParam);
	const router = useRouter();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		router.push(`/search?q=${encodeURIComponent(searchParam)}`);
	};

	return (
		<section>
			<Head>
				<title>Search - {queryParam}</title>
				<meta name="description" content="Fake news Fake you" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Header
				onChange={(e) => setSearchParam(e.target.value)}
				onSubmit={handleSubmit}
				searchValue={searchParam}
			/>
			<section className="container mx-auto px-2 py-10  space-y-8 xl:px-[5%]">
				<h2 className=" text-xl sm:text-2xl font-bold text-center leading-normal">
					You are viewing {data.length} results for{' '}
					<span className="text-white bg-black/50 rounded px-1">
						{queryParam}
					</span>
				</h2>
				<ul
					role="list"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 odd"
				>
					{data.map((newsContent) => (
						<BlogListItem key={newsContent.id} {...newsContent} />
					))}
				</ul>
			</section>
		</section>
	);
};

export default Search;
