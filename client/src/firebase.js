// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f0f65.firebaseapp.com",
  projectId: "mern-estate-f0f65",
  storageBucket: "mern-estate-f0f65.appspot.com",
  messagingSenderId: "1088988453270",
  appId: "1:1088988453270:web:839ec4363b2a1ef485e5b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);