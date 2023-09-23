// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

export default app;