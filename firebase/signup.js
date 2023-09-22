// signup.js

import { database, ref, push } from './firebase';

const signUpWithEmailPassword = (email, password, firstName, lastName) => {
  return new Promise((resolve, reject) => {
    // Create a new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const timestamp = Date.now();
        const userRef = push(ref(database, 'users'), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          timestamp: timestamp
        });
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorMessage);
      });
  });
};

export { signUpWithEmailPassword };
