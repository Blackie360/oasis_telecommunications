const createHomePage = () => {
  const header = document.getElementById('main');
  header.innerHTML = `
  <!-- Hero Section -->
  <header class="hero bg-dark text-white text-center py-5">
      <div class="container">
          <h1 class="display-4">Welcome to Oasis Telecom</h1>
          <p class="lead">Your Trusted Partner in Telecommunication Solutions</p>
          <a href="#contact" class="btn btn-primary btn-lg">Get Started</a>
      </div>
  </header>
  `;

  return header;
};

export { createHomePage };
