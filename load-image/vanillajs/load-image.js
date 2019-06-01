customElements.define('vanillajs-load-image',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: 'open'});
      const thumb = document.createElement('img');
      const img = document.createElement('img');

      const style = document.createElement('style');
      style.textContent = `
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
      shadowRoot.appendChild(thumb);
      shadowRoot.appendChild(img);

      thumb.classList.add('thumb');

      img.src = this.getAttribute('src');
      thumb.src = this.getAttribute('src-thumb');
      
      const alt = this.getAttribute('alt');
      img.alt = alt;
      thumb.alt = alt;

      img.addEventListener('load', () => {
        this.setAttribute('ready', '');
      });
    }
  }
);