import { auth } from "./firebase.js";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("loginError");
        errorMessage.textContent = "";
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "index.html";
        } catch (error) {
            console.error(error);
            const messages = {
                "auth/invalid-credential": "Incorrect email or password.",
                "auth/wrong-password": "Incorrect email or password.",
                "auth/user-not-found": "No account found with this email.",
                "auth/invalid-email": "Please enter a valid email address."
            };
            errorMessage.textContent = messages[error.code] || "Login failed. Please try again.";
        }
    });
}

const togglePassword = document.getElementById("togglePassword");
if (togglePassword) {
    togglePassword.addEventListener("click", () => {
        const input = document.getElementById("password");
        const icon = togglePassword.querySelector("i");
        input.type = input.type === "password" ? "text" : "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const errorMessage = document.getElementById("signupError");
        errorMessage.textContent = "";
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match.";
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            window.location.href = "index.html";
        } catch (error) {
            console.error(error);
            const messages = {
                "auth/email-already-in-use": "An account with this email already exists.",
                "auth/weak-password": "Password must be at least 6 characters.",
                "auth/invalid-email": "Please enter a valid email address."
            };
            errorMessage.textContent = messages[error.code] || "Unable to create account. Please try again.";
        }
    });
}

const toggleSignupPassword = document.getElementById("toggleSignupPassword");
if (toggleSignupPassword) {
    toggleSignupPassword.addEventListener("click", () => {
        const input = document.getElementById("signupPassword");
        const icon = toggleSignupPassword.querySelector("i");
        input.type = input.type === "password" ? "text" : "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
}

onAuthStateChanged(auth, (user) => {
    window.currentUser = user || null;
});

// Kept available for any existing page code that references window.firebaseAuth.
window.firebaseAuth = auth;
window.signOut = signOut;
