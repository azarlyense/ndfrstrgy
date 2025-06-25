  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyBnrsfQQEkdvKjl_0jBm8mEqGRvOo6XRrU",
  authDomain: "makrl4.firebaseapp.com",
  projectId: "makrl4",
  storageBucket: "makrl4.firebasestorage.app",
  messagingSenderId: "121155716124",
  appId: "1:121155716124:web:b5c713c0dc454424da8bd9",
  measurementId: "G-7FJD9HZDMX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
