import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRange'
})
export class FilterRangePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
