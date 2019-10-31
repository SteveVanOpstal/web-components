import { Component, HostBinding, Input, ViewEncapsulation, HostListener, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'angular-load-image',
  template: `
    <img [src]="srcThumb" [alt]="alt" class="thumb"/>
    <img [src]="src" [alt]="alt" (load)="ready = true"/>`,
  styleUrls: ['load-image.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadImageComponent implements OnChanges {
  @Input() src: string;
  @Input() srcThumb: string;
  @Input() alt: string;

  @HostBinding('attr.ready') ready: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (this.src && changes.src) {
      this.ready = false;
    }
  }
}
