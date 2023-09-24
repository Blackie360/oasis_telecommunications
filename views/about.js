//about page view
export const renderAboutPage = () => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="container my-5">
    <h2 class="text-center">Oasis Telecommunications Limited (OTL)</h2>
    <p class="lead text-center">Oasis Telecommunications Limited (OTL) is a privately owned Kenyan telecommunication service provider offering broadband and mobile services under the brand.</p>
  
    <div class="row">
      <!-- Values (Left) -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title mt-4">Our Values</h3>
            <ul class="card-text">
              <li>The Customer is always King</li>
              <li>Teamwork</li>
              <li>The staff are key</li>
              <li>Performance-driven</li>
              <li>Execution is key</li>
              <li>Excellence in everything</li>
              <li>Ethics and Integrity in all our dealings with customers</li>
            </ul>
          </div>
        </div>
      </div>
      
  
      <!-- Image (Right) -->
      <div class="col-lg-6">
        <img src="../src/assets/images/businessman-with-vision.png" alt="Oasis Telecommunications" class="img-fluid mb-4">
      </div>
    </div>
  
    <div class="row">
      <!-- Innovations & Accomplishments (Left on smaller screens) -->
      <div class="col-lg-6 order-lg-2">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center">Innovations & Accomplishments</h3>
            <ul class="card-text">
              <li>First to deploy a 700MHZ mobile network in Kenya</li>
              <li>First VOLTE mobile service provider in Kenya</li>
              <li>First 100% free on-net voice service for life* in Kenya.</li>
              <li>First to deploy 100% fiber optic network infrastructure in Kenya</li>
              <li>First to deliver 1000mbps capacity network to both Home or business in Kenya</li>
              <li>First commercial & residential FTTx service in Kenya</li>
              <li>First to deliver 1mbps broadband internet for ksh. 1000 (less than $10) in Kenya</li>
              <li>Shareholder in TEAMS with alternating cards (images will be placed here)</li>
            </ul>
          </div>
        </div>
      </div>
      
  
      <!-- Image (Right on smaller screens) -->
      <div class="col-lg-6 order-lg-1">
        <img src="../src/assets/images/innovation.png" alt="Innovation" class="img-fluid">
      </div>
    </div>
  </div>
  
    `;
    
    return div;
  };