// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8zFooOBMQw9fHPjI4H4MTko7g11nAD_4",
  authDomain: "smartphone-store-a53aa.firebaseapp.com",
  projectId: "smartphone-store-a53aa",
  storageBucket: "smartphone-store-a53aa.appspot.com",
  messagingSenderId: "567971783510",
  appId: "1:567971783510:web:5c547d87c4025e1d04acf7",
  measurementId: "G-YV2P9YDCD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);