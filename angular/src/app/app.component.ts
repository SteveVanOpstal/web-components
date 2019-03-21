import { Component } from '@angular/core';

@Component({
  selector: 'angular-root',
  template: `
    <angular-load-image
      src="http://localhost:3000/angular.jpg"
      thumb="http://localhost:3000/angular-thumb.jpg">
    </angular-load-image>`,
})
export class AppComponent {
}
