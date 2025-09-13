import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtsnwMmfo5NISznDju1w-ZaD-QIToZ-_A",
  authDomain: "campulse-9f1c8.firebaseapp.com",
  projectId: "campulse-9f1c8",
  storageBucket: "campulse-9f1c8.firebasestorage.app",
  messagingSenderId: "78652284163",
  appId: "1:78652284163:web:0b967cbd25ea2dbb42dd36",
  measurementId: "G-TD8KS1NZVC"
};

// Initialize Firebase robustly, preventing re-initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
