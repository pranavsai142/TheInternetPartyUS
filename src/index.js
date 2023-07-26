// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    loginButton,
    logoutButton,
    loginError,
    emailAddress,
    password,
    name
} from "./ui"

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

//Helper Functions
const loginEmailPassword = async () => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, emailAddress.value, password.value)
        if(userCredentials.user !== null) {
            document.location.pathname = "/account.html"
        }
    } catch {
        loginError.hidden = false
    }
}

function logoutEmailPassword() {
    auth.signOut().then(function() {
        console.log('User logged out');
      }, function(error) {
        console.error('Log out error', error);
      });
}

function getValue(element) {
    if(element.value != null) {
        return element.value
    } else {
        return ""
    }
}

function setAccountValues() {
    console.log(user)
    if(user) {
        name.innerHTML = user.displayName
    } else {
        name.innerHTML = "User not logged in."
    }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
connectAuthEmulator(auth, "http://localhost:9099")
console.log("test")
const user = await auth.currentUser

//Main function
//On page init, based on what page user is on, specific functions are run
if(document.location.pathname == "/login.html") {
    loginButton.addEventListener("click", loginEmailPassword)
    logoutButton.addEventListener("click", logoutEmailPassword)
    loginError.hidden = true
} else if(document.location.pathname == "/account.html") {
    setAccountValues()
}