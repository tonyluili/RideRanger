// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4uQVV-yOg8O7CXTRfX0x91Xx_fY8q2M4",
  authDomain: "rideranger-369302.firebaseapp.com",
  projectId: "rideranger-369302",
  storageBucket: "rideranger-369302.appspot.com",
  messagingSenderId: "30867188562",
  appId: "1:30867188562:web:62e8cbc989dcb12677a88b",
  measurementId: "G-RYGYWH6TY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

