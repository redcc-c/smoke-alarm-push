// firebase-config.js
// Firebase 기본 설정 + 초기화

const firebaseConfig = {
  apiKey: "AIzaSyBvzXKENAbGwf0e_V-A0LiRAbknrXuTIdU",
  authDomain: "miniproject-380f6.firebaseapp.com",
  projectId: "miniproject-380f6",
  storageBucket: "miniproject-380f6.firebasestorage.app",
  messagingSenderId: "3412525646",
  appId: "1:3412525646:web:7e39237267492fa709791f",
  measurementId: "G-VYLCRSTKJW"
};

// 전역 Firebase 초기화
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
