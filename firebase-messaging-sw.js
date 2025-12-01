importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBvzXKENAbGwf0e_V-A0LiRAbknrXuTIdU",
  authDomain: "miniproject-380f6.firebaseapp.com",
  projectId: "miniproject-380f6",
  storageBucket: "miniproject-380f6.firebasestorage.app",
  messagingSenderId: "3412525646",
  appId: "1:3412525646:web:7e39237267492fa709791f",
  measurementId: "G-VYLCRSTKJW"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 백그라운드 알림 처리
messaging.onBackgroundMessage((payload) => {
  console.log("백그라운드 메시지:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "icon.png" // ← 이걸로 수정해야 정상
  });
});
