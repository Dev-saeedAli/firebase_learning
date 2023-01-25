
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH9mpq_UTMXHiXq4Yak77JlTJlOLGmf4s",
  authDomain: "fir-learning-86bf0.firebaseapp.com",
  projectId: "fir-learning-86bf0",
  storageBucket: "fir-learning-86bf0.appspot.com",
  messagingSenderId: "246048704049",
  appId: "1:246048704049:web :568742b6ae6c07eef7b710",
  measurementId: "G-VN6P3YG9SK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider()
export const auth = getAuth(app)
export const db = getFirestore(app)