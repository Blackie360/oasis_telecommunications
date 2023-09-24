// contact us view

export const renderContactPage = () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="container mt-5">
        <h1>Contact Us</h1>
        <p>Feel free to contact us using the form below:</p>
        <!-- Add your contact form HTML here -->
      </div>
    `;
  
    return div;
  };
  