
import { Component, OnInit } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Come in!';
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg ('wine', 'wine',12,124,3,12,5),
    new Keg ('wine', 'wine',12,124,5,12,3),
    new Keg ('wine', 'wine',12,124,7,12,1)

  ];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
   this.selectedKeg = null;
  }
  addKeg(newKeg: Keg) {
   this.masterKegList.push(newKeg);
 }


}
