import { BlogListItemType } from '@/pages';
import { Star } from './Icons';
import Link from 'next/link';

const BlogListItem = (props: BlogListItemType & { className?: string }) => {
	const { title, rating, excerpt, author, className, id } = props;

	const handleLinkNavigation = () => {
		localStorage.setItem('articleID', id);
	};

	return (
		<li className="grid border-b last:border-0 ">
			<Link
				href="/news"
				className={`px-3 py-4 space-y-4 gap-4 ${className} hover:shadow-md transition-all duration-100 cursor-pointer`}
				onClick={handleLinkNavigation}
			>
				<div className="flex justify-between items-start">
					<h2 className="font-bold text-xl">{title}</h2>
					<p className="flex items-center gap-2">
						<Star fontSize={20} className="w-5 h-5" />
						{rating.rating}
					</p>
				</div>
				<p>{excerpt}</p>
				<div>
					<p className="bg-black text-white rounded px-3 w-fit text-sm">
						{author.name}
					</p>
				</div>
			</Link>
		</li>
	);
};

export default BlogListItem;
