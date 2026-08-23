import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";


import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

// ================= FIREBASE CONFIG =================

const firebaseConfig = {
    apiKey: "AIzaSyBYYqp46bCKUvkxurupyKCyc7Qte_RAjOc",
    authDomain: "maintainx-a5894.firebaseapp.com",
    projectId: "maintainx-a5894",
    storageBucket: "maintainx-a5894.firebasestorage.app",
    messagingSenderId: "618775483463",
    appId: "1:618775483463:web:8bba6a766446d3867d4d62"
};


// ================= INITIALIZE FIREBASE =================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document
            .getElementById("email")
            .value
            .trim();

        const password = document
            .getElementById("password")
            .value;

        const errorMessage =
            document.getElementById("loginError");

        errorMessage.textContent = "";

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            window.location.href = "index.html";

        } catch (error) {

            console.error(error);

            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/wrong-password"
            ) {
                errorMessage.textContent =
                    "Incorrect email or password.";

            } else if (error.code === "auth/user-not-found") {

                errorMessage.textContent =
                    "No account found with this email.";

            } else if (error.code === "auth/invalid-email") {

                errorMessage.textContent =
                    "Please enter a valid email address.";

            } else {

                errorMessage.textContent =
                    "Login failed. Please try again.";
            }
        }
    });
}


// ================= SHOW / HIDE LOGIN PASSWORD =================

const togglePassword =
    document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", function () {

        const passwordInput =
            document.getElementById("password");

        const icon =
            togglePassword.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
}


// ================= SIGN UP =================

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("signupEmail")
            .value
            .trim();

        const password =
            document.getElementById("signupPassword")
            .value;

        const confirmPassword =
            document.getElementById("confirmPassword")
            .value;

        const errorMessage =
            document.getElementById("signupError");

        errorMessage.textContent = "";

        if (password !== confirmPassword) {

            errorMessage.textContent =
                "Passwords do not match.";

            return;
        }

        try {

            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            window.location.href = "index.html";

        } catch (error) {

            console.error(error);

            if (error.code === "auth/email-already-in-use") {

                errorMessage.textContent =
                    "An account with this email already exists.";

            } else if (error.code === "auth/weak-password") {

                errorMessage.textContent =
                    "Password must be at least 6 characters.";

            } else if (error.code === "auth/invalid-email") {

                errorMessage.textContent =
                    "Please enter a valid email address.";

            } else {

                errorMessage.textContent =
                    "Unable to create account. Please try again.";
            }
        }
    });
}


// ================= SHOW / HIDE SIGNUP PASSWORD =================

const toggleSignupPassword =
    document.getElementById("toggleSignupPassword");

if (toggleSignupPassword) {

    toggleSignupPassword.addEventListener("click", function () {

        const passwordInput =
            document.getElementById("signupPassword");

        const icon =
            toggleSignupPassword.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    });
}

// ================= USER LOGIN STATE =================

onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log("User is logged in:", user.email);

        // Store basic user information for the frontend
        window.currentUser = user;

    } else {
        console.log("No user is logged in.");

        window.currentUser = null;
    }

});