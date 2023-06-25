import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-KvaAxi48fM2kEg816y-Y1Zs2Dk62R6g",
  authDomain: "employee-app-4f8b6.firebaseapp.com",
  projectId: "employee-app-4f8b6",
  storageBucket: "employee-app-4f8b6.appspot.com",
  messagingSenderId: "77539085279",
  appId: "1:77539085279:web:2f3550484dca1e8224926a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;