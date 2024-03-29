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
  filterByAlcoholConsume: number = 128;

kegs :  Keg[] = [
  new Keg ('wine','wine',12,124,3,12,4),
  new Keg ('wine','wine',10,124,5,12,4),
  new Keg ('wine','wine',8,124,7,12,4),
];



editButtonClicked(kegToEdit: Keg) {
  this.clickSender.emit(kegToEdit);
}

sellButtonClicked(currentKeg: Keg)
{
currentKeg.pints -=1;
}

happyHourButtonClicked(childKegList)
{
  for(let i =0; i<childKegList.length; i++)
  {
    childKegList[i].price -=5;
  }
}



resetPriceButtonClicked(childKegList)
{
  for (let i =0; i<childKegList.length; i++)
  {
    childKegList[i].price = childKegList[i].originalPrice;
  }
}

sellGrowlerButtonClicked(currentKeg: Keg)
{
currentKeg.pints -=32;
if(currentKeg.pints <= 0)
{
  alert("No beer more!")
}
}

sellLargeGrowlerButtonClicked(currentKeg: Keg)
{
currentKeg.pints -=64;
if(currentKeg.pints <= 0)
{
  alert("No beer more!")
}
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
  this.filterByAlcoholConsume= optionFromMenu;
}



}
