import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'angular-load-image',
  template: `
    <img [src]="srcThumb" [alt]="alt" class="thumb" [ngClass]="{ready: ready}"/>
    <img [src]="src" [alt]="alt" (load)="ready = true"/>`,
  styleUrls: ['load-image.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadImageComponent {
  @Input() src: string;
  @Input() srcThumb: string;
  @Input() alt: string;

  ready = false;
}
