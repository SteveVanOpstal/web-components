customElements.define('infinity-component',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        :host {
          border: 5px solid #dd0031;
          padding: 5px;
        }`;

      shadowRoot.appendChild(style);
      const iframe = document.createElement('iframe');
      iframe.src = 'index.html';
      // iframe.appendChild(document.createElement('infinity-component'))
      // shadowRoot.appendChild(iframe);
    }
  }
);

customElements.define('infinity-child',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        :host {
          border: 5px solid #dd0031;
          padding: 5px;
        }`;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(document.createElement('infinity-child2'));
    }
  }
);

customElements.define('infinity-child2',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        :host {
          border: 5px solid #dd0031;
          padding: 5px;
        }`;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(document.createElement('infinity-parent'));
    }
  }
);
