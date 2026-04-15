import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


  const firebaseConfig = {
  apiKey: "AIzaSyATPVKOQfhv7gTtsgCH9LRBva9hhI78x_A",
  authDomain: "tm16-ff217.firebaseapp.com",
  projectId: "tm16-ff217",
  storageBucket: "tm16-ff217.firebasestorage.app",
  messagingSenderId: "18021142358",
  appId: "1:18021142358:web:cef4cf7f4b434566ae50f7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
