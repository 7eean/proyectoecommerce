// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANH-U6YGqnuj2Wgf_W_eAEF8HYNFMVeEY",
  authDomain: "reactapp-ecommerce.firebaseapp.com",
  projectId: "reactapp-ecommerce",
  storageBucket: "reactapp-ecommerce.appspot.com",
  messagingSenderId: "186729963525",
  appId: "1:186729963525:web:9819c83dcd61f87f18fc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Data base
export const database = getFirestore(app);