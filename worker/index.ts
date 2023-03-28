// @ts-expect-error
const serviceWorker = self as ServiceWorkerGlobalScope;

serviceWorker.addEventListener('install', (event) => {
	console.log('Service worker installed:', event);
	serviceWorker.registration.showNotification('App installed', {
		body: 'The app has been installed and is ready to use offline.',
		icon: '/icons/icon-512x512.png',
	});
});

serviceWorker.addEventListener('activate', (event) => {
	console.log('Service worker activated:', event);
	serviceWorker.registration.showNotification('App updated', {
		body: 'The app has been updated. Please refresh to see the latest version.',
		icon: '/icons/icon-512x512.png',
	});
});
