// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeAV3SjjBfDMp2NluOfIlpqPsPoNFvCZE",
  authDomain: "empyreansupplements.firebaseapp.com",
  projectId: "empyreansupplements",
  storageBucket: "empyreansupplements.appspot.com",
  messagingSenderId: "677673543186",
  appId: "1:677673543186:web:f956d1dca9b81aa3b19acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore()