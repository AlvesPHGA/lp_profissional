import AnimaScroll from './modules/anima-scroll.js';
import SmoothScroll from './modules/smooth-scroll.js';
import Modal from './modules/modal.js';

const animaScroll = new AnimaScroll('[data-scroll]');
animaScroll.init();

const smoothScroll = new SmoothScroll('[data-smooth]');
smoothScroll.init();

const modal = new Modal('[data-modal]');
modal.init();
