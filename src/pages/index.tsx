import Head from 'next/head';
import { useState } from 'react';
import useInfiniteScroll from '@/components/hooks/useInfiniteScroll';
import { news } from '@/data/news.json';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import BlogListItem from '@/components/BlogListItem';

export const createSubArrays = <T,>(items: T[], itemsPerSubarray: number) => {
	const subArrays = [];
	for (let i = 0; i < items.length; i += itemsPerSubarray) {
		subArrays.push(items.slice(i, i + itemsPerSubarray));
	}
	return subArrays;
};

export type BlogListItemType = typeof news[number];

const ITEMS_PER_PAGE = 24;

export default function Home() {
	const [itemsToShow, setItemsToShow] = useState(24);
	const [searchParam, setSearchParam] = useState('');
	const router = useRouter();

	const handlePagination = () => {
		if (itemsToShow < news.length) {
			setItemsToShow((prev) => prev + ITEMS_PER_PAGE);
		}
	};

	const loadMoreRef = useInfiniteScroll({ callback: handlePagination });

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		localStorage.setItem('searchParam', searchParam);
		router.push(`/search?type=title`);
	};

	return (
		<>
			<Head>
				<title>OnlyFakeNews - Your trusty site for fake news</title>
				<meta name="description" content="Fake news, fake you" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Header
				onSubmit={handleSubmit}
				onChange={(e) => setSearchParam(e.target.value)}
				searchValue={searchParam}
			/>
			<section className="container mx-auto px-2 py-10  space-y-6 xl:px-[5%]">
				<ul
					role="list"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 odd"
				>
					{news.slice(0, itemsToShow).map((newsContent) => (
						<BlogListItem key={newsContent.id} {...newsContent} />
					))}
				</ul>
				{itemsToShow < news.length && (
					<div className="flex max-w-lg w-fit pt-5 gap-6 mx-auto">
						<button type="button" ref={loadMoreRef}>
							Load More
						</button>
					</div>
				)}
			</section>
		</>
	);
}

/* export const getStaticProps: GetServerSideProps<NewsAPIData> = async () => {
	const url = 'https://onlyfakenews.vercel.app/api/news';

	const res = await fetch(url);
	const data = await res.json();

	return {
		props: data,
	};
};
 */
