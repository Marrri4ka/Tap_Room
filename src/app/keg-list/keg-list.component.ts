import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',

  styleUrls: ['./keg-list.component.css',]
})
export class KegListComponent  {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "incompleteTasks";

kegs :  Keg[] = [
  new Keg ('wine','wine',12),
  new Keg ('wine','wine',10),
  new Keg ('wine','wine',8),
];

editButtonClicked(kegToEdit: Keg) {
  this.clickSender.emit(kegToEdit);
}

priceColor(currentKeg){
   if (currentKeg.price === 12){
     return "bg-danger";
   } else if (currentKeg.price  === 10) {
     return  "bg-warning";
   } else {
     return "bg-info";
   }
 }

 onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
}

}
