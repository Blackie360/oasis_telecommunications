//service page view
export const renderSerivcesPage = () => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="container mt-5">
    <h1>Our Services</h1>
    <div class="row">
        <!-- Service 1: Installation -->
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../src/assets/images/wifi.png" class="card-img-top" alt="Installation Service">
                <div class="card-body">
                    <h5 class="card-title">Installation</h5>
                    <p class="card-text">We offer professional installation services for all your telecom needs.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        
        <!-- Service 2: Business Connectivity -->
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../src/assets/images/connectivity.png" class="card-img-top" alt="Business Connectivity Service">
                <div class="card-body">
                    <h5 class="card-title">Business Connectivity</h5>
                    <p class="card-text">Stay connected with reliable and high-speed business connectivity solutions.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        
        <!-- Service 3: IoT (Internet of Things) -->
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="../src/assets/images/Iot.png" class="card-img-top" alt="IoT Service">
                <div class="card-body">
                    <h5 class="card-title">IoT (Internet of Things)</h5>
                    <p class="card-text">Explore the possibilities of IoT with our cutting-edge solutions.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  </div>
    `;
    
    return div;
  };