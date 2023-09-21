// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

// Sign up page view
export const render = () => {
    const div = document.createElement('div');
    div.innerHTML = `
        <link rel="stylesheet" href="/src/styles/style.css">
        <div id="root">
            <main class="py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mt-0 card-title border-bottom text-dark">Sign Up</h4>

                                    <form method="" action="">
                                        <input type="hidden" name="_token" />
                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <input id="first_name" type="text" placeholder="First Name"
                                                    class="form-control" name="first_name" value="" 
                                                    autocomplete="first_name" autofocus />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <input id="last_name" type="text" placeholder="Last Name"
                                                    class="form-control" name="last_name" value="" 
                                                    autocomplete="last_name" autofocus />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <input id="email" type="email" placeholder="Email" class="form-control"
                                                    name="email" value=""  autocomplete="email" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <input id="password" type="password" placeholder="Password"
                                                    class="form-control" name="password" 
                                                    autocomplete="new-password" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <div class="col-md-12">
                                                <input id="password-confirm" type="password" placeholder="Confirm Password"
                                                    class="form-control" name="password_confirmation" 
                                                    autocomplete="new-password" />
                                            </div>
                                        </div>

                                        <div class="form-group row mb-0">
                                            <div class="col-md-12">
                                                <button type="submit" id="signup_btn" class="text-decoration-none px-3 py-1 nav-link ms-2 custom-btn-style-shadow">Register</button>
                                            </div>
                                        </div>
                                        <!--Already have an account link to login page-->
                                        <div class="form-group row mb-0">
                                            <div class="col-md-12">
                                                <a href="/login" id="login" class="btn btn-link nav-link">Already have an account, Sign In</a>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;

    return div;
};

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6v7ZybUQe_Ywj2hyFKRmU_cfwlzJlV1w",
    authDomain: "oasis-telecom.firebaseapp.com",
    databaseURL: "https://oasis-telecom-default-rtdb.firebaseio.com",
    projectId: "oasis-telecom",
    storageBucket: "oasis-telecom.appspot.com",
    messagingSenderId: "721689200142",
    appId: "1:721689200142:web:c853b8e48304903e22de5f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);

// Function to handle the signup process
const handleSignUp = () => {
    const fname = document.getElementById("first_name").value;
    const lname = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User signed up:", user);

            // TODO: Add your database logic here
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error:", errorCode, errorMessage);
        });
};

// Add event listener to the signup button
document.addEventListener("DOMContentLoaded", () => {
    const submitSignup = document.getElementById("signup_btn");
    if (submitSignup) {
        submitSignup.addEventListener("click", (e) => {
            e.preventDefault();
            handleSignUp();
        });
    }
});