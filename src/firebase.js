  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyBiE72FJgUip1cSmLah8dsAAwnpYs2Qc10",
  authDomain: "gyder-75543.firebaseapp.com",
  projectId: "gyder-75543",
  storageBucket: "gyder-75543.firebasestorage.app",
  messagingSenderId: "300567666351",
  appId: "1:300567666351:web:580bcc94773100bb3a3e5a",
  measurementId: "G-6RQ62VEDWV"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
