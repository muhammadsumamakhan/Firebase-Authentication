// firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-Qra536bSfG0a8i8Tbun-THmxQt9Xc-0",
  authDomain: "expertizo-advance-a4e1a.firebaseapp.com",
  projectId: "expertizo-advance-a4e1a",
  storageBucket: "expertizo-advance-a4e1a.appspot.com",
  messagingSenderId: "249559753802",
  appId: "1:249559753802:web:23244ac8f57e97e2c1f2b3",
  measurementId: "G-QNREKVGVVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
