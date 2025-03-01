// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZulBxL15K7s5VB5FvriM3dr1rqwjHCM",
  authDomain: "landproof-auth.firebaseapp.com",
  projectId: "landproof-auth",
  storageBucket: "landproof-auth.firebasestorage.app",
  messagingSenderId: "51486207451",
  appId: "1:51486207451:web:3d46f4b415d1faf3d10bfe",
  measurementId: "G-MXLVMQTHR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
