
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAV8APhb1Yux1o8wn6qeVEbjkzxClhS6-4",
  authDomain: "proyectofinalfascioli.firebaseapp.com",
  projectId: "proyectofinalfascioli",
  storageBucket: "proyectofinalfascioli.appspot.com",
  messagingSenderId: "527023010379",
  appId: "1:527023010379:web:0ccebb0310f6ec3f2bd3ce",
  measurementId: "G-TLCR3Q5MVE"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
