const ROUTES = [
  {
    path: '/defer/index.html',
    label: 'Defer',
  },
  {
    path: '/load-image',
    label: 'Load image',
    routes: [
      {
        path: '/load-image/index.html',
        label: 'All',
      },
      {
        path: '/load-image/javascript.html',
        label: 'JavaScript',
      },
      {
        path: '/load-image/angular.html',
        label: 'Angular',
      },
      {
        path: '/load-image/vue.html',
        label: 'Vue',
      },
      {
        path: '/load-image/react.html',
        label: 'React',
      }
    ]
  },
  {
    path: '/carousel',
    label: 'Carousel',
    routes: [
      {
        path: '/carousel/javascript-carousel/index.html',
        label: 'JavaScript'
      },
      {
        path: '/carousel/angular-carousel/dist/index.html',
        label: 'Angular'
      },
      {
        path: '/carousel/vue-carousel/dist/index.html',
        label: 'Vue'
      },
      {
        path: '/carousel/react-carousel/build/index.html',
        label: 'React'
      },
    ]
  }
];


customElements.define('web-components-navigation',
  class extends HTMLElement {
    constructor() {
      super();

      const nav = document.createElement('nav');

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
          padding-bottom: 20px;
        }

        nav {
          display: flex;
          justify-content: space-around;
          margin: 0 auto;
          width: 600px;
          font-size: 30px;
        }`;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(nav);

      for (const route of ROUTES) {
        const anchor = document.createElement('a');
        anchor.href = route.routes ? route.routes[0].path : route.path;
        anchor.innerHTML = route.label;

        nav.appendChild(anchor);

        if (route.routes && route.routes.length && window.location.pathname.indexOf(route.path) > -1) {
          const subNav = document.createElement('nav');
          shadowRoot.appendChild(subNav);

          for (const subRoute of route.routes) {
            const subAnchor = document.createElement('a');
            subAnchor.href = subRoute.path;
            subAnchor.innerHTML = subRoute.label;

            subNav.appendChild(subAnchor);
          }
        }
      }
    }
  }
);
