import { useState, useEffect } from 'react';

interface UseInfiniteScrollProps {
	callback: () => void;
	root?: null | HTMLElement;
	rootMargin?: string;
	threshold?: number;
}
/**
 * Intersection observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * callback (required): A function that will be executed when the target element intersects with the root element.
 * root (optional): An HTMLElement that is used as the viewport for checking visibility of the target.
 * If null, the root is the browser viewport.
 * rootMargin (optional): A string that specifies an offset that is applied to the root element's bounding box.
 * threshold (optional): A number or an array of numbers between 0 and 1 that defines the percentage of
 * the target's visibility needed to trigger the callback function.
 * */

const useInfiniteScroll = ({
	callback,
	root = null,
	rootMargin = '0px',
	threshold = 1.0,
}: UseInfiniteScrollProps) => {
	const [target, setTarget] = useState<null | HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					observer.disconnect();
					callback();
				}
			},
			{
				root,
				rootMargin,
				threshold,
			}
		);

		if (target) {
			observer.observe(target);
		}

		return () => {
			observer.disconnect();
		};
	}, [callback, root, rootMargin, target, threshold]);

	return setTarget;
};

export default useInfiniteScroll;
