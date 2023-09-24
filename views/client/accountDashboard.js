//client dashboard page view
export const renderAccountDashboard = () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- Hero Section -->
        <div class="container">
            <h1 class="display-4">Welcome to Oasis Telecom Trial User</h1>
            <p class="lead">Your Trusted Partner in Telecommunication Solutions</p>
            <a href="/contact" class="btn btn-primary btn-lg">Get Started</a>
        </div>
    `;
    return div;
};
