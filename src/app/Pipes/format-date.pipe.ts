import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date, ...args: number[]): unknown {
    // TODO 1
    let formatedDate = new Date(value);
    let day =
      formatedDate.getDate() < 10
        ? '0' + formatedDate.getDate()
        : formatedDate.getDate();

    let month =
      formatedDate.getMonth() < 10
        ? '0' + formatedDate.getMonth()
        : formatedDate.getMonth();

    let year = formatedDate.getFullYear();

    if (args[0] === 1) {
      return `${day}${month}${year}`;
    } else if (args[0] === 2) {
      return `${day} / ${month} / ${year}`;
    } else if (args[0] === 3) {
      return `${day}/${month}/${year}`;
    } else if (args[0] === 4) {
      return `${year}-${month}-${day}`;
    } else {
      return;
    }
  }
}
