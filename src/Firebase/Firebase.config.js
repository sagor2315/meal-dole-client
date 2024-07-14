// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_apiKey)

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,


    // apiKey: "AIzaSyCPZcyLsC-QVDBw_73nLuE19zGut_7VopY",
    // authDomain: "b8a12-client-side-mdzahidulisl.firebaseapp.com",
    // projectId: "b8a12-client-side-mdzahidulisl",
    // storageBucket: "b8a12-client-side-mdzahidulisl.appspot.com",
    // messagingSenderId: "721996082753",
    // appId: "1:721996082753:web:cc1c9a701e59feed0fe0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;