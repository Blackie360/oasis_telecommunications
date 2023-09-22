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
firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
      this.auth = firebase.auth();
      this.database = firebase.database();
  }

  initializeFirebase() {
      firebase.initializeApp(firebaseConfig);
  }

  signupWithEmailPassword(email, password, firstName, lastName) {
      return this.auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              const timestamp = this.getTimestamp();
              return this.database.ref(`users/${user.uid}`).set({
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  createdAt: timestamp
              });
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error(`Error signing up: ${errorCode} - ${errorMessage}`);
              throw error;
          });
  }

  getTimestamp() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

const firebaseInstance = new Firebase();
