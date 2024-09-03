import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockpipe'
})
export class stockPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
