import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadImageModule } from './load-image/load-image.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoadImageModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
