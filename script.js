const notificationButton = document.querySelector('#notification-button');

notificationButton.addEventListener('click', () => {
  Notification.requestPermission()
  .then(permission => {
    if(permission === "granted") {
      const notification = new Notification("this is notification", {
        body: "body notification:" + Math.random(),
        data: {hello: "world"},
        icon: 'https://raw.githubusercontent.com/rohithpala/HTML-CSS-JS-Projects/main/push-notification/logo.png',
        tag: 'notification-tag'
      });

      console.log(notification.data);
      notification.addEventListener('close', e  => {
        console.log(e);
      })
    }
  })
})