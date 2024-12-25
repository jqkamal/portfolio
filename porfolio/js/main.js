import { initSmoothScroll } from './utils/scroll.js';
import { initNavigation } from './utils/navigation.js';
import { initContactForm } from './components/contact.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initNavigation();
    initContactForm();
});