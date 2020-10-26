importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyD8vDjGH_qtbmFdklAAo3ZpU2TfluS7mG4",
  authDomain: "ventajon-segunda-mano-9b134.firebaseapp.com",
  databaseURL: "https://ventajon-segunda-mano-9b134.firebaseio.com",
  projectId: "ventajon-segunda-mano-9b134",
  storageBucket: "ventajon-segunda-mano-9b134.appspot.com",
  messagingSenderId: "809118292621",
  appId: "1:809118292621:web:43c6d7858bc7dba401e0c4",
  vapidKey: "BKqSemswEFXC3SyO5qm6oq7HRwboUVwrYi55rerTCWKF1ISwpkB9MXdsy2dApAV4_kxhNma79S6MXu5oSTIjatA"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});