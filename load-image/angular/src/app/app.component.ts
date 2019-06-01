import { Component } from '@angular/core';

@Component({
  selector: 'angular-root',
  template: `
    <angular-load-image
      src="http://localhost:3200/angular.jpg"
      thumb="http://localhost:3200/angular-thumb.jpg"
      alt="angular">
    </angular-load-image>`,
})
export class AppComponent {
}
