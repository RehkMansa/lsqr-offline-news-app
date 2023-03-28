// @ts-expect-error
const serviceWorker = self as ServiceWorkerGlobalScope;

// Request permission to display notifications
function requestNotificationPermission() {
	if ('Notification' in self) {
		Notification.requestPermission().then((permission) => {
			if (permission === 'granted') {
				serviceWorker.registration.showNotification(
					'Notification permission granted!',
					{
						body: 'You can now receive notifications.',
						icon: '/icons/icon-512x512.png',
					}
				);
			}
		});
	}
}

// Add event listener for ServiceWorkerRegistration.onupdatefound
serviceWorker.addEventListener('updatefound', () => {
	// Notify user that an update is available
	serviceWorker.registration.showNotification('New update available!', {
		body: 'A new version of the app is available. Please refresh to update.',
		icon: '/icons/icon-512x512.png',
	});
});

// Add event listener for ServiceWorkerRegistration.oninstall
serviceWorker.addEventListener('install', (event) => {
	self.console.log('Service worker installed:', event);
	requestNotificationPermission();
});

// Add event listener for ServiceWorkerRegistration.onactivate
serviceWorker.addEventListener('activate', (event) => {
	self.console.log('Service worker activated:', event);
	// Notify user that the app has been updated
	serviceWorker.registration.showNotification('App updated', {
		body: 'The app has been updated. Please refresh to see the latest version.',
		icon: '/icons/icon-512x512.png',
	});
});
