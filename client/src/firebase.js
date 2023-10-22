// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.vite.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-539e6.firebaseapp.com",
  projectId: "realestate-539e6",
  storageBucket: "realestate-539e6.appspot.com",
  messagingSenderId: "915685815508",
  appId: "1:915685815508:web:9824879376809f293cb741",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
