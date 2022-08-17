// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFHV1U2LK-JQ7vvrpuSM7TCm5kS5MJFFw",
  authDomain: "natural-deli.firebaseapp.com",
  projectId: "natural-deli",
  storageBucket: "natural-deli.appspot.com",
  messagingSenderId: "1014913725139",
  appId: "1:1014913725139:web:973733de5a21aa3a511a26",
  measurementId: "G-Q6T652GNTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db