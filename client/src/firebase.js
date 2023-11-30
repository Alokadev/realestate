// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-b070b.firebaseapp.com",
  projectId: "real-state-b070b",
  storageBucket: "real-state-b070b.appspot.com",
  messagingSenderId: "153678309287",
  appId: "1:153678309287:web:f53dda538c4ed312adb882",
};

console.log(import.meta.env.VITE_FIREBASE_API_KEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
