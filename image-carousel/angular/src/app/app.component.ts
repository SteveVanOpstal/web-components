import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  index = 0;

  prev() {
    this.index += 1;
    this.index %= 4;
  }

  next() {
    this.index -= 1;
    if (this.index < 0) {
      this.index = 3;
    }
  }
}
