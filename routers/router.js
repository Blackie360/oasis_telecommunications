// router.js

import { loadAllPages } from './pageLoader';
import { onPopState, pushState } from './history'; // Import history-related functions

const routes = new Map();

const loadRoutes = async () => {
  // Load your routes here
  const pages = await loadAllPages();
  routes.set('/', pages.home);
  routes.set('/about', pages.about);
  routes.set('/services', pages.services);
  routes.set('/contact', pages.contact);
  routes.set('/myaccount', pages.myaccount);
  routes.set('/signUp', pages.signUp);
  routes.set('/login', pages.login);
  routes.set('/client', pages.accountDashboard);
  routes.set('/admin', pages.adminHome);
};

const handle404 = () => {
  const root = document.getElementById('content');
  root.innerHTML = `<div class="container monochrome-theme">
  <div class="row">
      <div class="col-md-12">
          <div class="error-template text-center">
              <h1>Oops!</h1>
              <h2>404 Not Found</h2>
              <img src="../src/assets/images/error.png" alt="404 Not Found" class="img-responsive small-image">
              <div class="error-details">
                  Sorry, an error has occurred, Requested page not found!
              </div>
              <div class="error-actions">
                  <a href="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                      Take Me Home </a>
                  <a href="nav-link" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact Support </a>
              </div>
          </div>
      </div>
  </div>
</div>`;
};

// Define and export onNavClick handler
export const onNavClick = async (pathname) => {
  const root = document.getElementById('content');

  if (!routes.has(pathname)) {
    handle404();
    return;
  }

  const pageContent = routes.get(pathname);

  // Convert the HTML element to a string using outerHTML
  root.innerHTML = pageContent.outerHTML;

  // Hide the "Selfcare" link when on the "/signUp" or "/login" pages
  const myAccountLink = document.getElementById('myAccount');
  if (myAccountLink) {
    if (pathname === '/signUp' || pathname === '/login' || pathname === '/myaccount') {
      myAccountLink.style.display = 'none';
    } else {
      myAccountLink.style.display = 'block';
    }
  }

  // Update the URL using the pushState function from history
  pushState({}, '', pathname);
};

const handleRouting = () => {
  const pathname = window.location.pathname;
  onNavClick(pathname);
};

const router = async () => {
  await loadRoutes();

  // Set up routing
  window.addEventListener('popstate', handleRouting);

  // Trigger initial routing
  handleRouting();
};

router();
