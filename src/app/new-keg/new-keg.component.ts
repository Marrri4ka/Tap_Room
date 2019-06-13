import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
   @Output() sendKeg = new EventEmitter();

  submitForm(name: string,brand: string, price: number, alcoholcontent: number,  pints: number, originalPrice: number, password: number, image: number) {
   let correctPassword = 1991;
   if(password != correctPassword)
   {
     alert("Wrong password");
   } else {
      let images: string[] = ['https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/german-helles.jpg',
       'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/weizenbock.jpg',
       'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/german-schwarzbier.jpg',
      'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/vienna-lager.jpg',
      'https://cdnimg.webstaurantstore.com/uploads/buying_guide/2017/2/maibock.jpg']
      let imageNumber = parseInt(image);
      let finalImage = images[imageNumber];



    let newKeg: Keg = new Keg(name, brand, price, pints, alcoholcontent,originalPrice, finalImage );
    this.sendKeg.emit(newKeg);
  }
  }
}
