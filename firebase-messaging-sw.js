// firebase-messaging-sw.js
// 반드시 레포 루트(= index.html과 같은 위치)에 있음

importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBvzXKENAbGwf0e_V-A0LiRAbknrXuTIdU",
  authDomain: "miniproject-380f6.firebaseapp.com",
  projectId: "miniproject-380f6",
  storageBucket: "miniproject-380f6.firebasestorage.app",
  messagingSenderId: "3412525646",
  appId: "1:3412525646:web:7e39237267492fa709791f",
  measurementId: "G-VYLCRSTKJW",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 백그라운드 푸시 알림 처리
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] 백그라운드 메시지:", payload);

  const title =
    (payload.notification && payload.notification.title) || "알림";
  const options = {
    body: (payload.notification && payload.notification.body) || "",
    icon: (payload.notification && payload.notification.icon) || "icon.png",
  };

  self.registration.showNotification(title, options);
});
