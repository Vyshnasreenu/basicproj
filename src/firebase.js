// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCDqaVxyDwwrbzmhF08_lcpQJE1Dgij6YY",
//     authDomain: "react-authentication-2de71.firebaseapp.com",
//     projectId: "react-authentication-2de71",
//     storageBucket: "react-authentication-2de71.appspot.com",
//     messagingSenderId: "228988653206",
//     appId: "1:228988653206:web:5e85ed408442a425513cb7",
//     measurementId: "G-6YY44P2S73"
// };
// const firebaseConfig = {
//     apiKey: "AIzaSyCDqaVxyDwwrbzmhF08_lcpQJE1Dgij6YY",
//     authDomain: "react-authentication-2de71.firebaseapp.com",
//     projectId: "react-authentication-2de71",
//     storageBucket: "react-authentication-2de71.appspot.com",
//     messagingSenderId: "228988653206",
//     appId: "1:228988653206:web:841837a01f605b18513cb7",
//     measurementId: "G-BWJXHKGJDL"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCDqaVxyDwwrbzmhF08_lcpQJE1Dgij6YY",
    authDomain: "react-authentication-2de71.firebaseapp.com",
    projectId: "react-authentication-2de71",
    storageBucket: "react-authentication-2de71.appspot.com",
    messagingSenderId: "228988653206",
    appId: "1:228988653206:web:8b68843f6ca945fd513cb7",
    measurementId: "G-6PN41CW8CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;