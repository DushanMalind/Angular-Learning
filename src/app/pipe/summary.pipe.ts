import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length:number): unknown {
    return value.substring(0,length) + '...';
  }

}
