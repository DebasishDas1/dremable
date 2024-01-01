// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKCgzX-Ynk25ZCAtD14RQ3SIlr5FWHJYM",
    authDomain: "dremable.firebaseapp.com",
    projectId: "dremable",
    storageBucket: "dremable.appspot.com",
    messagingSenderId: "339347800070",
    appId: "1:339347800070:web:b59ede88298fc29bd8c387",
    measurementId: "G-8ES0Q9KN1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };