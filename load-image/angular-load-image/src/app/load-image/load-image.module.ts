import { NgModule } from '@angular/core';

import { LoadImageComponent } from './load-image.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [LoadImageComponent],
  declarations: [LoadImageComponent],
  entryComponents: [LoadImageComponent]
})
export class LoadImageModule { }
