// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClSO69Ay43BR4ReiJn__ZNObBHDn-cdDo",
  authDomain: "proyectoedb-da253.firebaseapp.com",
  projectId: "proyectoedb-da253",
  storageBucket: "proyectoedb-da253.appspot.com",
  messagingSenderId: "360793465418",
  appId: "1:360793465418:web:0d7496b617a4787ef0fcb3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;