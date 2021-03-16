import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datedifference'
})
export class DatedifferencePipe implements PipeTransform {
  transform(start: Date, end: Date): string {
    throw new Error('Not implemented yet!');
  }
}
