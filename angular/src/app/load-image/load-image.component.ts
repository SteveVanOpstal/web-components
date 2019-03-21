import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'angular-load-image',
  template: `
    <img [src]="thumb" class="thumb" [ngClass]="{ready: ready}"/>
    <img [src]="src" (load)="ready = true"/>`,
  styleUrls: ['load-image.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadImageComponent {
  @Input() src: string;
  @Input() thumb: string;

  ready = false;
}
