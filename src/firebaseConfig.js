// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7bUghbf6AqcDi1HOlqidnBZ3mbTCW26M",
  authDomain: "naturaldeli111.firebaseapp.com",
  projectId: "naturaldeli111",
  storageBucket: "naturaldeli111.appspot.com",
  messagingSenderId: "558681440188",
  appId: "1:558681440188:web:08123e8044fd730703b5b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db