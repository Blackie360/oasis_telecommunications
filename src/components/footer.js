const createFooter = () => {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
    <footer class="footer-95942">
      
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="row">
                <div class="col-sm-6 col-md mb-4 mb-md-0">
                  <h3>Discover</h3>
                  <ul class="list-unstyled nav-links">
                    <li><a href="#">Explore Our Network</a></li>
                    <li><a href="#">Technology Advancements</a></li>
                    <li><a href="#">Services</a></li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md mb-4 mb-md-0">
                  <h3>About</h3>
                  <ul class="list-unstyled nav-links">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Team</a></li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md mb-4 mb-md-0">
                  <h3>Services</h3>
                  <ul class="list-unstyled nav-links">
                    <li><a href="#">Installation</a></li>
                    <li><a href="#">Business Connectivity</a></li>
                    <li><a href="#">IoT (Internet of Things)</a></li>
                    
                  </ul>
                </div>
                <div class="col-sm-6 col-md mb-4 mb-md-0">
                  <h3>Buy</h3>
                  <ul class="list-unstyled nav-links">
                    <li><a href="#">Where to Buy</a></li>
                    <li><a href="#">Shop Online</a></li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md mb-4 mb-md-0">
                  <h3>Help</h3>
                  <ul class="list-unstyled nav-links">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Knowledge Base</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-3">
            <div class="col-md-12 pb-3">
              <div class="border-top">
                
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-4">
              <ul class="list-unstyled social mb-0 pb-0 nav-left">
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-facebook"></span></a></li>
              </ul>
            </div>
            <div class="col-md-4 text-center">
              <span class="small">Oasis &copy; All Rights Reserved.</span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
    `;
  
    return footer;
  };
  
  export { createFooter };
  