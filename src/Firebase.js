// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsGYqAJsfLEJ8sv9N0mPXsuID2HVfmg4w",
    authDomain: "login-auth-a21d5.firebaseapp.com",
    projectId: "login-auth-a21d5",
    storageBucket: "login-auth-a21d5.appspot.com",
    messagingSenderId: "98533316272",
    appId: "1:98533316272:web:569dff8e14a3519cdb8d75"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)