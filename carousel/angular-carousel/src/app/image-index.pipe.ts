import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageIndex'
})
export class ImageIndexPipe implements PipeTransform {
  transform(index: number, subFolder: string): any {
    return `http://localhost:3200/${subFolder}/${index % 4}.jpg`;
  }
}
