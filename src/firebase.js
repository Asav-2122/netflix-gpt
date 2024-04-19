// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB_Ehayk0Rk37WfkVInJU5jLtEOkO5u34",
  authDomain: "netflix-gpt-23dae.firebaseapp.com",
  projectId: "netflix-gpt-23dae",
  storageBucket: "netflix-gpt-23dae.appspot.com",
  messagingSenderId: "678890075107",
  appId: "1:678890075107:web:641115ebbe2b0d2ddca6d6",
  measurementId: "G-0PNTD4JM4Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
