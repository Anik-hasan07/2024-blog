// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mynewblog-7ca49.firebaseapp.com",
  projectId: "mynewblog-7ca49",
  storageBucket: "mynewblog-7ca49.appspot.com",
  messagingSenderId: "720014649634",
  appId: "1:720014649634:web:ac21571e0e9a39a10f5d7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
