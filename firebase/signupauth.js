import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase-config";

// Function to handle user sign-up
const handleSignUp = () => {
    console.log("Sign-up button clicked!");
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("password-confirm").value;

  if (password !== passwordConfirm) {
    alert("Passwords do not match.");
    return;
  }

  const auth = getAuth(app);

  // Create a new user with Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sign up successful
      const user = userCredential.user;
      // You can save additional user information (e.g., first name, last name) in a Firestore database here if needed.
      // Then, redirect the user to the desired page.
      window.location.href = "/dashboard"; // Replace with your dashboard page URL.
    })
    .catch((error) => {
      // Handle sign-up errors (e.g., email already in use)
      alert("Sign-up failed. " + error.message);
    });
};

// Add an event listener to ensure the DOM is fully loaded before running the code
window.addEventListener('DOMContentLoaded', (event) => {
    // Attach the "handleSignUp" function to the "Register" button
    const signupButton = document.getElementById("signup_btn");
    if (signupButton) {
      signupButton.addEventListener("click", handleSignUp);
    }
  });