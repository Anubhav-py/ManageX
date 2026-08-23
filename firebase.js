import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBYYqp46bCKUvkxurupyKCyc7Qte_RAjOc",
    authDomain: "maintainx-a5894.firebaseapp.com",
    projectId: "maintainx-a5894",
    storageBucket: "maintainx-a5894.firebasestorage.app",
    messagingSenderId: "618775483463",
    appId: "1:618775483463:web:8bba6a766446d3867d4d62"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };