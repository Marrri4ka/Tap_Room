import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './models/keg.model';

@Pipe({
  name: "alcoholConsume",
  pure: false
})


export class AlcoholConsumePipe implements PipeTransform {
  transform(input: Keg[], maxValue) {
    var output: Keg[] = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].alcoholcontent < maxValue) {
          output.push(input[i]);
        }
      }
      return output;

}
}
