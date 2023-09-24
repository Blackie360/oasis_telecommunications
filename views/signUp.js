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
console.log('Sign up page rendered');


