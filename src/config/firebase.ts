import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAgAHszeP0OFFgUJJZycbOp1BwkmUdps8",
  authDomain: "health-weather-pwa.firebaseapp.com",
  projectId: "health-weather-pwa",
  storageBucket: "health-weather-pwa.firebasestorage.app",
  messagingSenderId: "1052869615414",
  appId: "1:1052869615414:web:39b59f25d1c24c087a9d97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
