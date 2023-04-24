// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ5Sty_qAzOBtd_h2gFTGEC5sHH3_fNWE",
    authDomain: "theinternetparty-5b902.firebaseapp.com",
    projectId: "theinternetparty-5b902",
    storageBucket: "theinternetparty-5b902.appspot.com",
    messagingSenderId: "372100457867",
    appId: "1:372100457867:web:e842fec6b1bf2ad40dbb8e",
    measurementId: "G-55X9M772TC"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

onAuthStateChanged(auth, user => {
    if(user !== null) {
        console.log("User logged in")
    } else {
        console.log("No user")
    }
})