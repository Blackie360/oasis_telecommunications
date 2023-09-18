//login page view
export const render = () => {
    const div = document.createElement('div');
    div.innerHTML = `
    <link rel="stylesheet" href="/src/styles/style.css">
<div id="root">
        <main class="py-3">
            <div class="container"></div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="mt-0 card-title border-bottom text-dark">
                                    Sign In
                                </h4>

                                <form method="POST" action="">
                                    <input type="hidden" name="_token"/>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <input id="email" type="email" placeholder="Email Address" class="form-control" name="email" value="" required autocomplete="email" autofocus />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <input id="password" type="password" placeholder="Password" class="form-control" name="password" required autocomplete="current-password" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-md-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" id="remember" />
                                                <label class="form-check-label" for="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-0">
                                        <div class="col-md-12">
                                            <button type="submit" class="text-decoration-none px-3 py-1 nav-link ms-2 custom-btn-style-shadow">
                                                Login
                                            </button>
                                            <a class="btn btn-link" href="">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </div>
                                        <!--Don't have an account link to sign up page-->
                                        <div class="form-group row mb-0">
                                            <div class="col-md-12">
                                                <a href="/signUp" id="register" class="btn btn-link nav-link">Dont have an account, Sign Up</a>
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

