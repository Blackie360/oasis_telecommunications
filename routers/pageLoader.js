// pageLoader.js
import { render as homeRender } from '../views/home';
import { render as servicesRender } from '../views/services';
import { render as aboutRender } from '../views/about';
import { render as contactUsRender } from '../views/contactUs';
import { render as myaccountRender } from '../views/myaccount';
import { render as signUpRender } from '../views/signUp';
import { render as loginRender } from '../views/login';
import { render as accountDashboardRender } from '../views/client/accountDashboard';
import { render as adminHomeRender } from '../views/admin/home';


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
