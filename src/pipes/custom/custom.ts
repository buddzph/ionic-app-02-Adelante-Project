import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CustomPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'htmltostring',
})
export class CustomPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/<\/?[^>]+(>|$)/g, "");
  }
}
