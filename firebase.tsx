import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKCgzX-Ynk25ZCAtD14RQ3SIlr5FWHJYM",
  authDomain: "dremable.firebaseapp.com",
  projectId: "dremable",
  storageBucket: "dremable.appspot.com",
  messagingSenderId: "339347800070",
  appId: "1:339347800070:web:b59ede88298fc29bd8c387",
  measurementId: "G-8ES0Q9KN1N",
};

const app = firebase.apps.length
  ? firebase.app()
  : initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
