import zlib from 'zlib';
import type { NextApiRequest, NextApiResponse } from 'next';
import NewsArticles from '@/data/news.json';

type NewsPayload = {
	id: string;
	title: string;
	excerpt: string;
	story_content: string;
	story_date: string;
	rating: {
		upvotes: number;
		downvotes: number;
		rating: number;
	};
	author: {
		name: string;
		email: string;
		phone: null;
	};
}[];

export type NewsAPIData = {
	news: NewsPayload;
	count: number;
	successful: boolean;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<NewsAPIData>
) {
	const jsonData = JSON.stringify(NewsArticles);
	const gzippedData = zlib.gzipSync(jsonData);

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Content-Encoding', 'gzip');
	res.setHeader('Cache-Control', 'max-age=60, s-maxage=86400'); // cache the response for 1 minute (browser) and 1 day (CDN)
	res.status(200).end(gzippedData);
}
