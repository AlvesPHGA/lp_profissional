import AnimaScroll from './modules/anima-scroll.js';
import SmoothScroll from './modules/smooth-scroll.js';
import MenuHamburger from './modules/hamburger-menu.js';

const animaScroll = new AnimaScroll('[data-scroll]');
animaScroll.init();

const smoothScroll = new SmoothScroll('[data-smooth]');
smoothScroll.init();

const menuHamburger = new MenuHamburger('.menu__hamburger');
menuHamburger.init();
