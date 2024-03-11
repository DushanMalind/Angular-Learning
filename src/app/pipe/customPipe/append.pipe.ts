import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'append'
})

export class AppendPipe implements PipeTransform{
 /* transform(value: any, ...args: any[]): any {
    return "Customer Email:"+value+" "+args[0];
  }*/

  transform(value: any, ...args: any[]): any {
    let result = '';

    result += "Customer Email: " + value;

    if (args[0] && args[0].name) {
      result += ", Customer Name: " + args[0].name;
    }

    if (args[0] && args[0].age) {
      result += ", Customer Age: " + args[0].age;
    }

    return result;
  }

}
