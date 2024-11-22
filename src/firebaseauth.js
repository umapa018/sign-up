// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChsgPA20bSq0RQhJH2usCvOhErhdfzH4g",
    authDomain: "login-25293.firebaseapp.com",
    projectId: "login-25293",
    storageBucket: "login-25293.firebasestorage.app",
    messagingSenderId: "246368061541",
    appId: "1:246368061541:web:24fe420843ec60f40ade8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Show message function
function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 5000);
}

// Sign up event
document.getElementById('signup').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('remail').value;
    const password = document.getElementById('rpass').value;
    const name = document.getElementById('fname').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = { email, name };
            const docRef = doc(db, "users", user.uid);

            setDoc(docRef, userData)
                .then(() => {
                    showMessage('Account created successfully', 'signUpMessage');
                    window.location.href = 'login.html';
                })
                .catch((error) => {
                    console.error("Error writing document", error);
                    showMessage("Error saving user data.", 'signUpMessage');
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Error Creating Account:' + error.message, 'signUpMessage');
            }
        });
});


/* Sign in event

document.getElementById('signin').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get email and password values from input fields
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();

    // Log the email and password to verify input
    console.log("Attempting to sign in with email:", email);

    // Attempt to sign in with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; // Get user info
            showMessage('Login Successful', 'signInMessage'); // Show success message
            localStorage.setItem('loggedInUser Id', user.uid); // Store user ID in local storage
            window.location.href = 'home.html'; // Redirect to home page
        })
        .catch((error) => {
            console.error("Sign-in error:", error); // Log the error for debugging
            const errorCode = error.code; // Get error code
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage'); // Show error message
            } else {
                showMessage('Error: ' + error.message, 'signInMessage'); // Show general error message
            }
        });*/


        // Sign in event
document.getElementById('signin').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get email and password values from input fields
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();

    // Log the email and password to verify input
    console.log("Attempting to sign in with email:", email);

    // Attempt to sign in with Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user; // Get user info
            showMessage('Login Successful', 'signInMessage'); // Show success message
            localStorage.setItem('loggedInUser Id', user.uid); // Store user ID in local storage
            window.location.href = 'home.html'; // Redirect to home page
        })
        .catch((error) => {
            console.error("Sign-in error:", error); // Log the error for debugging
            const errorCode = error.code; // Get error code
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage'); // Show error message
            } else {
                showMessage('Error: ' + error.message, 'signInMessage'); // Show general error message
            }
        });
});


