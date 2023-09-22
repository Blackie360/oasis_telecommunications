const signupForm = document.querySelector('form');
const firstNameInput = document.querySelector('#first_name');
const lastNameInput = document.querySelector('#last_name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#password-confirm');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const passwordConfirm = passwordConfirmInput.value.trim();
    if (firstName === '' || lastName === '' || email === '' || password === '' || passwordConfirm === '') {
        alert('Please fill in all fields.');
        return;
    }
    if (password !== passwordConfirm) {
        alert('Passwords do not match.');
        return;
    }
    firebaseInstance.signupWithEmailPassword(email, password, firstName, lastName)
        .then(() => {
            alert('Sign up successful!');
            signupForm.reset();
        })
        .catch((error) => {
            alert(`Error signing up: ${error.message}`);
        });
});
