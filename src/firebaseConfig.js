// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_d2HsIQssOa008a8DTpcgVdpb_w-S-0",
  authDomain: "pantry-tracker-ad549.firebaseapp.com",
  projectId: "pantry-tracker-ad549",
  storageBucket: "pantry-tracker-ad549.appspot.com",
  messagingSenderId: "412091193256",
  appId: "1:412091193256:web:3dcbe7c5ab94b85745ef9d",
  measurementId: "G-TS2K04SP33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };