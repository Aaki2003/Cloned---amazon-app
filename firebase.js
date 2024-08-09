// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAErNb55hJWo0o80DGd2dst3i3jetn0gRA",
  authDomain: "clone-72ffb.firebaseapp.com",
  projectId: "clone-72ffb",
  storageBucket: "clone-72ffb.appspot.com",
  messagingSenderId: "381865602778",
  appId: "1:381865602778:web:629ffaa55ecc672e8fffe3",
  measurementId: "G-LDSNHEBYGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;