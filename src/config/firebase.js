
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyBZLHQ_82IT0RXfCAS1TA3uTDx_d8VgGwY",
  authDomain: "tiktok---jornada-74b0b.firebaseapp.com",
  projectId: "tiktok---jornada-74b0b",
  storageBucket: "tiktok---jornada-74b0b.appspot.com",
  messagingSenderId: "660860757603",
  appId: "1:660860757603:web:483043e04426aa0a843a56"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;