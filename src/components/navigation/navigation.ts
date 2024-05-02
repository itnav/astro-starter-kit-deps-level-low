import './navigation.scss';
import html from './navigation.html?raw';

class Navigation extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = html;
    this.setAttribute('role', 'navigation');
  }
}

customElements.define('app-navigation', Navigation);
