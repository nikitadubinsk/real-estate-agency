import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realtorFilter',
})
export class RealtorFilterPipe implements PipeTransform {
  transform(realtors: any, name: string = '') {
    if (!name.trim()) {
      return realtors;
    }

    return realtors.filter((realtor: any) => {
      return realtor.name.toLowerCase().includes(name.toLowerCase());
    });
  }
}
