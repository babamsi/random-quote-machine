import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyALn9axV4pmZEcCeWhYnukCxTtwZffTODw",
  authDomain: "random-quotes-f6db2.firebaseapp.com",
  databaseURL: "https://random-quotes-f6db2.firebaseio.com",
  projectId: "random-quotes-f6db2",
  storageBucket: "random-quotes-f6db2.appspot.com",
  messagingSenderId: "58512386514",
  appId: "1:58512386514:web:18362f4be0b0d2955bc00b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth();
const provider = new GoogleAuthProvider()
const SignInWithGoogle = () => signInWithPopup(auth, provider)

export {db, auth, provider, SignInWithGoogle}