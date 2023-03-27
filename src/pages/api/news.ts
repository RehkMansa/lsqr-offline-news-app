// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
	res.status(200).json(NewsArticles);
}
