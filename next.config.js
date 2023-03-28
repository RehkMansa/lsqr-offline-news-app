/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
	cacheOnFrontEndNav: true,
});

const nextConfig = {
	reactStrictMode: true,
};

module.exports = withPWA({
	...nextConfig,
});
