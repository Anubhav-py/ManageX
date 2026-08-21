import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzfo3rVJ4mHqvHxv2Y8YxVlMZD-7TMudw",
  authDomain: "campusfix-1d63e.firebaseapp.com",
  projectId: "campusfix-1d63e",
  storageBucket: "campusfix-1d63e.firebasestorage.app",
  messagingSenderId: "958003866001",
  appId: "1:958003866001:web:a6bb5a5ca6b1fb4f139230"
};

// Start Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make authentication functions available
window.firebaseAuth = auth;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;