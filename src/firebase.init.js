// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAIZhyjhqPSKpWM9DE8_rRBu0pHjhDla4",
  authDomain: "ema-john-simple-e0314.firebaseapp.com",
  projectId: "ema-john-simple-e0314",
  storageBucket: "ema-john-simple-e0314.appspot.com",
  messagingSenderId: "986053327492",
  appId: "1:986053327492:web:fce7861a96c783bf6c20d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
