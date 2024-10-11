// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiCXYY_PDr5kfssBaO2DDCeL8fhxPuQo",
  authDomain: "kyoostore-d05f4.firebaseapp.com",
  projectId: "kyoostore-d05f4",
  storageBucket: "kyoostore-d05f4.appspot.com",
  messagingSenderId: "730820372204",
  appId: "1:730820372204:web:874cd38bafb131dce2a7c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);