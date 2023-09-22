// firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

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

// Get a reference to the database service
const database = getDatabase();

export { database, ref, push };
