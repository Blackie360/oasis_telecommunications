 //home page view
export const render = () => {
    const div = document.createElement('div');
    div.innerHTML = `
    <!-- Hero Section -->
        <div class="container">
            <img src="hero-image.jpg" alt="Hero Image" class="img-fluid mb-4" style="max-width: 100%;">
            <h1 class="display-4">Welcome to Oasis Telecom</h1>
            <p class="lead">Your Trusted Partner in Telecommunication Solutions</p>
            <a href="/contact" class="btn btn-primary btn-lg">Get Started</a>
        </div>
    `;  
    return div;
  };