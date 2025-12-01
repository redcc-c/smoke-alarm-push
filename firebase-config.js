// Firebase SDK 로드 (firebase-app, firebase-messaging)
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// 🔥 네 Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyBvzXKENAbGwf0e_V-A0LiRAbknrXuTIdU",
  authDomain: "miniproject-380f6.firebaseapp.com",
  projectId: "miniproject-380f6",
  storageBucket: "miniproject-380f6.firebasestorage.app",
  messagingSenderId: "3412525646",
  appId: "1:3412525646:web:7e39237267492fa709791f",
  measurementId: "G-VYLCRSTKJW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
