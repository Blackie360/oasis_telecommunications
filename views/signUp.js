// Sign up page view
export const  renderSignUpPage= () => {
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

                                    <form>
                                        <input type="hidden" name="_token" />

                                        <div class="form-group">
                                            <input id="first_name" type="text" placeholder="First Name" class="form-control" name="first_name" autocomplete="first_name" autofocus />
                                        </div>

                                        <div class="form-group">
                                            <input id="last_name" type="text" placeholder="Last Name" class="form-control" name="last_name" autocomplete="last_name" autofocus />
                                        </div>

                                        <div class="form-group">
                                            <input id="email" type="email" placeholder="Email" class="form-control" name="email" autocomplete="email" />
                                        </div>

                                        <div class="form-group">
                                            <input id="password" type="password" placeholder="Password" class="form-control" name="password" autocomplete="new-password" />
                                        </div>

                                        <div class="form-group">
                                            <input id="password-confirm" type="password" placeholder="Confirm Password" class="form-control" name="password_confirmation" autocomplete="new-password" />
                                        </div>

                                        <div class="form-group">
                                            <button type="submit" id="signup_btn" class="text-decoration-none px-3 py-1 nav-link ms-2 custom-btn-style-shadow">Register</button>
                                        </div>

                                        <div class="form-group">
                                            <a href="/login" id="login" class="btn btn-link nav-link">Already have an account, Sign In</a>
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
// Event listener function for the sign-up button
const handleSignUp = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  
    console.log('Button clicked'); // Log a message to the console when the button is clicked
    
    // You can add your sign-up logic here
    // For example, you can access form elements and their values like this:
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-confirm').value;
    
    const signUp = (firstName, lastName, email, password, confirmPassword) => {
        // Perform sign-up action using Firebase Auth
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // Redirect to profile page
                window.location.href = '/profile';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

        // Log the form values
        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        });
    };
    signUp(firstName, lastName, email, password, confirmPassword);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    // Your event listener setup code here
    const signUpButton = document.getElementById('signup_btn');
    console.log('Sign-up button:', signUpButton);
    
    if (signUpButton) {
      signUpButton.addEventListener('click', handleSignUp);
    } else {
      console.log('Sign-up button not found in the DOM.');
    }
  });
  
  console.log('Sign up page rendered');
  
  

