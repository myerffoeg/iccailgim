import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datedifference'
})
export class DatedifferencePipe implements PipeTransform {
  transform(start: Date, end: Date): string {

    if (!start) {
      start = new Date();
    }

    if (!end) {
      end = new Date();
    }

    const months = Math.ceil(
      Math.abs(start.getTime() - end.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    if (months > 11) {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      let value = `${years} ${years > 1 ? 'ans' : 'an'}`;
      if (remainingMonths % 12 > 0) {
        value += ` et ${remainingMonths % 12} mois`;
      }
      return value;
    }
    return `${months} mois`;
  }
}
