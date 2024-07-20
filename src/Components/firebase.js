// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9BL1atZyY7uD_OoUHge1csQwQl7EdgLA",
  authDomain: "my-portfolio-a28e2.firebaseapp.com",
  projectId: "my-portfolio-a28e2",
  storageBucket: "my-portfolio-a28e2.appspot.com",
  messagingSenderId: "273375939275",
  appId: "1:273375939275:web:0b359ab7e4a90306ba294e",
  measurementId: "G-BYMVLMVF47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, addDoc, getDoc, getDocs };
