// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAATpWPeIh3WNwQD1Xf-9VS8tsuFIKcJ-g",
  authDomain: "todo-app-1f76f.firebaseapp.com",
  projectId: "todo-app-1f76f",
  storageBucket: "todo-app-1f76f.firebasestorage.app",
  messagingSenderId: "857871682214",
  appId: "1:857871682214:web:948de7e719290c5befc267",
  measurementId: "G-GZZ7LT877F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;
