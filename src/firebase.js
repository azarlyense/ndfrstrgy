  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyCjyukkGqIhRg4twCNxnb0XZ9R_v_R26Zo",
  authDomain: "capcaraple01.firebaseapp.com",
  projectId: "capcaraple01",
  storageBucket: "capcaraple01.firebasestorage.app",
  messagingSenderId: "332115672127",
  appId: "1:332115672127:web:f0dce3d8eb52f8e4850c8a",
  measurementId: "G-DPZW5JXNRB"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
