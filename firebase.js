import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7MQWcFHLWxwUR9gT6BndavvZ-XTiYCVE",
    authDomain: "maintai-x-f1.firebaseapp.com",
    projectId: "maintai-x-f1",
    storageBucket: "maintai-x-f1.firebasestorage.app",
    messagingSenderId: "575835349787",
    appId: "1:575835349787:web:15a1de3e3d94d871b3a9be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
