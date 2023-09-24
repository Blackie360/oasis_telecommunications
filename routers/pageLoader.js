// pageLoader.js
import { renderHomePage as homeRender } from '../views/home';
import { renderSerivcesPage as servicesRender } from '../views/services';
import { renderAboutPage as aboutRender } from '../views/about';
import { renderContactPage as contactUsRender } from '../views/contactUs';
import { renderMyAccountPage as myaccountRender } from '../views/myaccount';
import { renderSignUpPage as signUpRender } from '../views/signUp';
import { renderLoginPage as loginRender } from '../views/login';
import { renderAccountDashboard as accountDashboardRender } from '../views/client/accountDashboard';
import { renderHomePage as adminHomeRender } from '../views/admin/home';


export const loadPage = async (page) => {
  const response = await fetch(page);
  return response.text();
};

export const loadAllPages = async () => {
  const pages = {};

  // Load index.html from the root directory
  pages.home = await loadPage('index.html');

  // Load other pages from the 'views' directory
  pages.home = homeRender();
  pages.about = aboutRender();
  pages.services = servicesRender();
  pages.contact = contactUsRender();
  pages.myaccount = myaccountRender();
  pages.signUp = signUpRender();
  pages.login = loginRender();
  pages.accountDashboard = accountDashboardRender();
  pages.adminHome = adminHomeRender();
  
  return pages;
};
