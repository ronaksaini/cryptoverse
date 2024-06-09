import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfIBoIcgv-HQ3xwBSzY51CLD-9NGLPiUg",
  authDomain: "cryptoverse-beac5.firebaseapp.com",
  projectId: "cryptoverse-beac5",
  storageBucket: "cryptoverse-beac5.appspot.com",
  messagingSenderId: "89965486806",
  appId: "1:89965486806:web:092d875e072e36b3c35f77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth=getAuth();