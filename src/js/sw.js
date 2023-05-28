self.addEventListener('install', function (event) {
    console.log('Service Worker installed');

    event.waitUntil(scheduleNotifications());
});

self.addEventListener('activate', function (event) {
    console.log('Service Worker activated');
});

self.addEventListener('push', function (event) {
    console.log('Push notification received');

    // Parse the received data
    var notificationData = event.data.json();

    // Customize the notification
    var options = {
        body: notificationData.body,
        icon: notificationData.icon,
        // Add more options as needed
    };

    // Show the notification
    event.waitUntil(
        self.registration.showNotification(notificationData.title, options)
    );
});

self.addEventListener('notificationclick', function (event) {
    console.log('Notification clicked');
});

function scheduleNotifications() {
    // Schedule notifications at a specific time each day
    var scheduleTime = new Date();
    scheduleTime.setHours(9);  // Set the desired hour
    scheduleTime.setMinutes(0);  // Set the desired minute

    // Calculate the delay until the next scheduled time
    var delay = scheduleTime.getTime() - Date.now();
    if (delay < 0) {
        // If the scheduled time has already passed, set the delay for the next day
        delay += 24 * 60 * 60 * 1000;
    }

    // Schedule the notification
    return self.registration.showNotification('Daily Notification', {
        body: 'This is a daily notification.',
        icon: 'notification-icon.png',
    })
        .then(function () {
            // Reschedule the next notification after the current one is shown
            return self.registration.showNotification('Next Notification', {
                body: 'This is the next notification.',
                icon: 'notification-icon.png',
                // Add more options as needed
            });
        })
        .then(function () {
            // Repeat the process daily
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(scheduleNotifications());
                }, delay);
            });
        });
}