// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvOSwT763wCJ2LOpCI9Hwt4oQ03xNTC48",
  authDomain: "realestate-c7d8c.firebaseapp.com",
  projectId: "realestate-c7d8c",
  storageBucket: "realestate-c7d8c.appspot.com",
  messagingSenderId: "269225489934",
  appId: "1:269225489934:web:cff78d741c1558a29a6e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);