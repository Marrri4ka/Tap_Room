
import { Component, OnInit } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // public done: boolean = false;
  currentFocus: string = 'Angular Homework';
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg ('wine', 'wine',12),
    new Keg ('wine', 'wine',12),
    new Keg ('wine', 'wine',12)

  ];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
    console.log("keg selected ", this.selectedKeg)
  }
  finishedEditing() {
   this.selectedKeg = null;
  }
  addKeg(newKeg: Keg) {
   this.masterKegList.push(newKeg);
 }


}
