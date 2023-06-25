import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "employee-app-4f8b6.firebaseapp.com",
  projectId: "employee-app-4f8b6",
  storageBucket: "employee-app-4f8b6.appspot.com",
  messagingSenderId: "77539085279",
  appId: "1:77539085279:web:2f3550484dca1e8224926a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);