// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Document Elements
const loginButton = document.getElementById("login_button")
const emailAddress = document.getElementById("email_address")
const password = document.getElementById("password")
function getValue(element) {
    if(element.value != null) {
        return element.value
    } else {
        return ""
    }
}
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
connectAuthEmulator(auth, "http://localhost:9099")

const loginEmailPassword = async () => {
    const userCredentials = await signInWithEmailAndPassword(auth, getValue(emailAddress), getValue(password))
    console.log(userCredentials.user)
}
loginButton.addEventListener("click", loginEmailPassword)
onAuthStateChanged(auth, user => {
    if(user !== null) {
        console.log("User logged in")
    } else {
        console.log("No user")
    }
})