import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'angular-load-image',
  template: `
    <img class="thumb" [ngClass]="{ready: ready}" [src]="srcThumb"/>
    <img [src]="src" (load)="ready = true"/>`,
  styleUrls: ['load-image.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadImageComponent {
  @Input() src: string;
  @Input() srcThumb: string;

  ready = false;
}
