const ROUTES = [
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
    path: '/image-carousel',
    label: 'Carousel',
    routes: [
      {
        path: '/image-carousel/javascript/index.html',
        label: 'JavaScript'
      },
      {
        path: '/image-carousel/angular/dist/angular/index.html',
        label: 'Angular'
      },
      {
        path: '/image-carousel/vue/dist/index.html',
        label: 'Vue'
      },
      {
        path: '/image-carousel/react/build/index.html',
        label: 'React'
      },
    ]
  }
];


customElements.define('web-components-navigation',
  class extends HTMLElement {
    nav = document.createElement('nav');

    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        nav {
          display: flex;
          justify-content: space-around;
          margin: 0 auto;
          width: 500px;
          font-size: 30px;
        }`;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(this.nav);

      for (const route of ROUTES) {
        const anchor = document.createElement('a');
        anchor.href = route.routes ? route.routes[0].path : route.path;
        anchor.innerHTML = route.label;

        this.nav.appendChild(anchor);

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
