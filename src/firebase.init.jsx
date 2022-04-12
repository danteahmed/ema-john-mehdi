import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6D4YP17QWOoMLJH9WfaWzoTCXXmkFrxE",
  authDomain: "ema-john-simple-4d568.firebaseapp.com",
  projectId: "ema-john-simple-4d568",
  storageBucket: "ema-john-simple-4d568.appspot.com",
  messagingSenderId: "860764021633",
  appId: "1:860764021633:web:6da150d7ba07561491be80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;