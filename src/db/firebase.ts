import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA66NXEJ1LjoAbLD3wGi-WvlNUYH08DreM",
  authDomain: "practise-7e1e2.firebaseapp.com",
  projectId: "practise-7e1e2",
  storageBucket: "practise-7e1e2.firebasestorage.app",
  messagingSenderId: "685826180484",
  appId: "1:685826180484:web:5909c3ad8899088c2c09d1",
  measurementId: "G-VXDM0DTD9P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;