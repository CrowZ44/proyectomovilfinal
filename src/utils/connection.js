// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmawyDAzVcQlWRHVz8-LbZqTp_h3kGdjk",
  authDomain: "proyectomoviles-25137.firebaseapp.com",
  databaseURL: "https://proyectomoviles-25137-default-rtdb.firebaseio.com",
  projectId: "proyectomoviles-25137",
  storageBucket: "proyectomoviles-25137.appspot.com",
  messagingSenderId: "97222638589",
  appId: "1:97222638589:web:894eed12941c52628e3794"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;