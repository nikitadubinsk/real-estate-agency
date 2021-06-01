import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adsFilter',
})
export class AdsFilterPipe implements PipeTransform {
  transform(ads: any, title: string = '') {
    if (!title.trim()) {
      return ads;
    }

    return ads.filter((ad: any) => {
      return ad.title.toLowerCase().includes(title.toLowerCase());
    });
  }
}
