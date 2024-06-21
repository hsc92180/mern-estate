// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c01f.firebaseapp.com",
  projectId: "mern-estate-6c01f",
  storageBucket: "mern-estate-6c01f.appspot.com",
  messagingSenderId: "944686678265",
  appId: "1:944686678265:web:018cb258599f8a55c82228"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);