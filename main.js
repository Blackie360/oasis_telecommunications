import './src/styles/style.css';
import './src/styles/header.css';
import './src/styles/footer.css';
import { createHeader } from './src/components/header';
import { createFooter } from './src/components/footer';
import { createHomePage } from './src/components/homepage';
// Import our custom CSS
import './src/styles/scss/styles.scss';

// Import Bootstrap's JS (assuming you're using ES6 modules)
import * as bootstrap from 'bootstrap';

const footerContent = document.getElementById('footer');
const headerContent = document.getElementById('header');
const homepageContent = document.getElementById('homepage'); // Correct the ID

// Create and insert the header component
createHeader(headerContent);

// Create and insert the main component
createHomePage(homepageContent);

// Create and insert the footer component
createFooter(footerContent);
