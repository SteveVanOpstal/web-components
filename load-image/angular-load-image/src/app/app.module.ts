import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';

import {LoadImageComponent} from './load-image/load-image.component';
import {LoadImageModule} from './load-image/load-image.module';

@NgModule({
  imports: [BrowserModule, LoadImageModule]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(LoadImageComponent, { injector: this.injector });
    customElements.define('angular-load-image', el);
  }
}
