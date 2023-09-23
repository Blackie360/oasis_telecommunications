// Sign up page view
export const render = () => {

    const div = document.createElement('div');
  
    div.innerHTML = `
      <link rel="stylesheet" href="/src/styles/style.css">

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title border-bottom text-dark">Sign Up</h4>

                <form>
                  <div class="form-group">
                    <input type="text" id="first_name" placeholder="First Name" class="form-control" autofocus>
                  </div>

                  <div class="form-group">
                    <input type="text" id="last_name" placeholder="Last Name" class="form-control">
                  </div>

                  <div class="form-group">
                    <input type="email" id="email" placeholder="Email" class="form-control">
                  </div>

                  <div class="form-group">
                    <input type="password" id="password" placeholder="Password" class="form-control">
                  </div>

                  <div class="form-group">
                    <input type="password" id="password-confirm" placeholder="Confirm Password" class="form-control">
                  </div>

                  <div class="form-group">
                    <button type="button" id="signup_btn" class="btn btn-primary">Register</button>
                  </div>

                </form>

                <!-- Already have an account link to login page -->
                <div class="form-group">
                  <a href="/login" id="login" class="btn btn-link">Already have an account, Sign In</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Append div to document body
    document.body.appendChild(div);
    
    // Get reference to button 
    const signupBtn = div.querySelector('#signup_btn');
  
    // Add click handler
    signupBtn.addEventListener('click', function() {
      console.log('signup_btn clicked'); 
    });
  
    return div;
  }
  
  console.log('Script running!');
