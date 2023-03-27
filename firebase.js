import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBO6g8GoyNCKehJQ9WcpRB9uQdPJR1Ptpg",
  authDomain: "movie-database-21e06.firebaseapp.com",
  projectId: "movie-database-21e06",
  storageBucket: "movie-database-21e06.appspot.com",
  messagingSenderId: "784377809374",
  appId: "1:784377809374:web:128cebd587ce0199feb54f"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
