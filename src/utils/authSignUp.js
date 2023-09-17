// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

    submit_signup.addEventListener("click", (e) => {
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let username = document.getElementById("username").value;

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    set(ref(database, 'users/' + user.uid), {
      email: email,
      username: username,
      password: password
  }).then(() => {
      console.log('Data written successfully');
  }).catch((error) => {
      console.error('Error writing data:', error);
  });


    alert("Account created successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    });

  console.log("Hello world");
