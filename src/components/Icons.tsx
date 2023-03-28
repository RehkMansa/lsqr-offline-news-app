export const Star = (props: React.ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
		className={`w-6 h-6 ${props.className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
		/>
	</svg>
);

export const LongArrowLeft = (props: React.ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
		className={`w-6 h-6 ${props.className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
		/>
	</svg>
);

export const MagnifyingGlass = (props: React.ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}
		className={`w-6 h-6 ${props.className}`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
		/>
	</svg>
);

export const ArrowUpOutlined = (props: React.ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		{...props}
		className={`w-6 h-6 ${props.className}`}
		stroke="currentColor"
		fill="none"
	>
		<title>arrow-up-bold</title>
		<path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
	</svg>
);

export const ArrowUpFilled = (props: React.ComponentProps<'svg'>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		{...props}
		className={`w-6 h-6 ${props.className}`}
		stroke="currentColor"
		fill="none"
	>
		<title>arrow-up-bold</title>
		<path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />
	</svg>
);
