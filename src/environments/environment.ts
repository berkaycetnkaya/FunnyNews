// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgqjSi9QAaMsnYtSj9oH0PGYzg4UiRCZc",
  authDomain: "funny-news-bc.firebaseapp.com",
  projectId: "funny-news-bc",
  storageBucket: "funny-news-bc.appspot.com",
  messagingSenderId: "573200029841",
  appId: "1:573200029841:web:d21949f39cf6a321e54730",
  measurementId: "G-7BN3P9672L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
