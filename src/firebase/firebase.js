// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcJgto0wiZbze7lzTZyKZDcvbZg9K6NwU",
  authDomain: "meetup-87ba4.firebaseapp.com",
  projectId: "meetup-87ba4",
  storageBucket: "meetup-87ba4.appspot.com",
  messagingSenderId: "521688908596",
  appId: "1:521688908596:web:dab54fb0ea24abb3a19b61",
  measurementId: "G-SJ7G74NK3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export {app,auth}