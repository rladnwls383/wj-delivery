// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1HdVxF-loGkvdO8h0kfcIBJen8AMDh-g",
  authDomain: "wj-delivery.firebaseapp.com",
  projectId: "wj-delivery",
  storageBucket: "wj-delivery.appspot.com",
  messagingSenderId: "816480051611",
  appId: "1:816480051611:web:172ae78a763495ae9b413e",
  measurementId: "G-9XW3ZVRC9L"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };