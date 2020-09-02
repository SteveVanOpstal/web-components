class JavascriptLoadImage extends HTMLElement {
  thumb = document.createElement('img');
  img = document.createElement('img');

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        width: 400px;
        height: 300px;
      }

      :host([ready]) > img.thumb {
        opacity: 0;
      }

      img {
        width: 400px;
        height: 300px;
      }
      
      img.thumb {
        position: absolute;
        opacity: 1;
        transition: opacity .5s;
      }`;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(this.thumb);
    shadowRoot.appendChild(this.img);

    this.thumb.classList.add('thumb');

    this.img.src = this.getAttribute('src');
    this.thumb.src = this.getAttribute('src-thumb');

    const alt = this.getAttribute('alt');
    this.img.alt = alt;
    this.thumb.alt = alt;

    this.img.setAttribute('loading', 'lazy');

    this.img.addEventListener('load', () => {
      this.setAttribute('ready', '');
    });
  }

  static get observedAttributes() { return ['src', 'src-thumb', 'alt']; }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'src') {
      this.img.src = newValue;
      this.removeAttribute('ready');
    }
    if (name === 'src-thumb') {
      this.thumb.src = newValue;
    }
    if (name === 'alt') {
      this.img.alt = newValue;
      this.thumb.alt = newValue;
    }
  }
}

customElements.define('javascript-load-image', JavascriptLoadImage);
