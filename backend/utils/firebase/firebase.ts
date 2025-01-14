import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBGKqXLIUf1PGUSNeCcOe4ri7Fu7j8l9xA",
  authDomain: "freelance-app-58893.firebaseapp.com",
  projectId: "freelance-app-58893",
  storageBucket: "freelance-app-58893.firebasestorage.app",
  messagingSenderId: "674856384826",
  appId: "1:674856384826:web:62880d2150fd3b16d73803",
  measurementId: "G-K62VLK1ZR7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
