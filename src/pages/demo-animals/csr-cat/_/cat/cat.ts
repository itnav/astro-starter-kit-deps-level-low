import '@/components/picture-frame/picture-frame';
import html from './cat.html?raw';

class Cat extends HTMLElement {
  imgElement: HTMLImageElement = null!;

  constructor() {
    super();
    this.innerHTML = html;
    this.imgElement = this.querySelector('img')!;
    this.loadImage();
  }

  async loadImage() {
    const imgEl = this.imgElement;

    const imgUrl = await fetch('http://shibe.online/api/cats')
      .then((response) => response.json())
      .then((data) => data[0]);

    imgEl.src = imgUrl;
  }
}

customElements.define('app-cat', Cat);
