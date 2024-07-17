// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDkPcLDLNqRE1KdJnGQ_xHuWZZ5Nr1bPM",
  authDomain: "crash-course-94dc3.firebaseapp.com",
  projectId: "crash-course-94dc3",
  storageBucket: "crash-course-94dc3.appspot.com",
  messagingSenderId: "203668388135",
  appId: "1:203668388135:web:ef6e17bd4542691f661102"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

