// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTPXBSglsiVE_XrgHiFwkRjjFclgsyKk8",
  authDomain: "netflixgpt-6632f.firebaseapp.com",
  databaseURL:
    "https://netflixgpt-6632f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-6632f",
  storageBucket: "netflixgpt-6632f.appspot.com",
  messagingSenderId: "542452472314",
  appId: "1:542452472314:web:3ab5a9da2106a0d7b96c43",
  measurementId: "G-PZG27YLJ2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
