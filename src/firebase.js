// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8KRHKB0FAm2hkFF6K7G3Qiz6X8kBFMTg",
  authDomain: "fire-authentication-8a97b.firebaseapp.com",
  projectId: "fire-authentication-8a97b",
  storageBucket: "fire-authentication-8a97b.appspot.com",
  messagingSenderId: "938044228303",
  appId: "1:938044228303:web:ae44a789087af5e6c5adba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
