/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
});

const runtimeCaching = require('./cache');

const nextConfig = {
	reactStrictMode: true,
};

module.exports = withPWA({
	...nextConfig,
	cacheOnFrontEndNav: true,
	runtimeCaching,
});
