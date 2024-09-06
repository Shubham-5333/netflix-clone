// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const {
    VITE_FIREBASE_API_KEY ,
    VITE_FIREBASE_AUTH_DOMAIN ,
    VITE_FIREBASE_PROJECT_ID ,
    VITE_FIREBASE_STORAGE_BUCKET ,
    VITE_FIREBASE_MESSAGING_SENDER_ID ,
    VITE_FIREBASE_APP_ID
}=import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ05rIifB9_-VuxXZEPNksKwaVdw1XKHk",
  authDomain: "netflix-clone-f71c6.firebaseapp.com",
  projectId: 'netflix-clone-f71c6',
  storageBucket:  "netflix-clone-f71c6.appspot.com",
  messagingSenderId: "496973366068",
  appId: "1:496973366068:web:72b3b1f895339acc07db61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)