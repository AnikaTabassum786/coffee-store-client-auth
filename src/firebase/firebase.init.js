// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfaivo93Qe1IWobihbWCOJvESoOdhf2-k",
  authDomain: "coffee-store-app-d31bb.firebaseapp.com",
  projectId: "coffee-store-app-d31bb",
  storageBucket: "coffee-store-app-d31bb.firebasestorage.app",
  messagingSenderId: "850601488133",
  appId: "1:850601488133:web:d07160db0054372cb2116c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);