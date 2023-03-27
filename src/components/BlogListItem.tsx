import { BlogListItemType } from '@/pages';
import { Star } from './Icons';

const BlogListItem = (props: BlogListItemType & { className?: string }) => {
	const { title, rating, excerpt, author, className } = props;

	return (
		<li
			className={`px-3 py-4 space-y-4 border-b last:border-0 gap-4 ${className} hover:shadow-md transition-all duration-100 cursor-pointer`}
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
		</li>
	);
};

export default BlogListItem;
