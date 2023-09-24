//contact us page view
export const renderMyAccountPage = () => {  
    const div = document.createElement('div');
    div.innerHTML = `
    <link rel="stylesheet" href="/src/styles/style.css">

    <div id="root">
      <main class="py-3">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-12">
                      <div class="card">
                          <div class="card-body">
                              <section class="text-center">
                                  <div class="container">
                                      <h1 class="display-3 text-dark">Welcome</h1>
                                      <p class="lead text-muted">Manage your account</p>
                                      <div class="d-flex justify-content-center">
                                          <a href="/signUp" id="register" class="text-decoration-none px-3 py-1 nav-link me-2 custom-btn-style">SIGN UP</a>
                                          <a href="/login" id="login" class="text-decoration-none px-3 py-1 nav-link ms-2 custom-btn-style-shadow">SIGN IN</a>
                                      </div>
                                  </div>
                              </section>
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

