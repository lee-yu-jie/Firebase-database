// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtGPqq971o5wrvqwTRCOmHiso0aq9sac",
  authDomain: "pratice-cd71d.firebaseapp.com",
  projectId: "pratice-cd71d",
  storageBucket: "pratice-cd71d.appspot.com",
  messagingSenderId: "497293790585",
  appId: "1:497293790585:web:b40dfba98e9db1ce71b3a8"
};

initializeApp(firebaseConfig)
const db = getFirestore()
export default db