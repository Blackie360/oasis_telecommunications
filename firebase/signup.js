//create sign up with eamil and password and export it to the sign up page  
export const signUpWithEmailPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};