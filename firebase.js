// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO6g8GoyNCKehJQ9WcpRB9uQdPJR1Ptpg",
  authDomain: "movie-database-21e06.firebaseapp.com",
  projectId: "movie-database-21e06",
  storageBucket: "movie-database-21e06.appspot.com",
  messagingSenderId: "784377809374",
  appId: "1:784377809374:web:128cebd587ce0199feb54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);