// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
// Base de datos:
export const database = getFirestore(app)