import './main.scss';

class Main extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('role', 'main');
  }
}

customElements.define('app-main', Main);
