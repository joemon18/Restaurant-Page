import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import aboutPage from './about.js';
import createBookingForm from './book.js';
import buttonsContainer from './btnsContainer.js';

import { setupEventListeners } from './eventListener.js';

homePage();
menuPage();
aboutPage();
createBookingForm();
buttonsContainer();

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});