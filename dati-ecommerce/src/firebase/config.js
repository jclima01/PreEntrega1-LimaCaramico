// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbPC-zgbY7t025PTCOHFmZrs-GDrODJw",
  authDomain: "coderhousefinalproyect.firebaseapp.com",
  projectId: "coderhousefinalproyect",
  storageBucket: "coderhousefinalproyect.appspot.com",
  messagingSenderId: "1081711345721",
  appId: "1:1081711345721:web:5ba7c39dda81f6ee924de8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirestore = () => app;
