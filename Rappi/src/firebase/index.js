// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ5TZvnCOytaQqaLZBr5Dlv-Ndn_QI0Z0",
  authDomain: "rappi-4ff14.firebaseapp.com",
  projectId: "rappi-4ff14",
  storageBucket: "rappi-4ff14.appspot.com",
  messagingSenderId: "414956668674",
  appId: "1:414956668674:web:794f877490637df4fd241b",
  measurementId: "G-H38EC71G80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {auth}