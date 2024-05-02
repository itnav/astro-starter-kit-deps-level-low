import './counter.scss';
import html from './counter.html?raw';

class Counter extends HTMLElement {
  buttonElement: HTMLButtonElement = null!;

  count = 0;

  constructor() {
    super();
    this.innerHTML = html;
    const buttonEl = (this.buttonElement = this.querySelector('button')!);
    buttonEl.addEventListener('click', () => this.increment());
    buttonEl.textContent = `Count: 0`;
  }

  increment() {
    this.count++;
    this.buttonElement.textContent = `Count: ${this.count}`;
  }
}

customElements.define('app-counter', Counter);
