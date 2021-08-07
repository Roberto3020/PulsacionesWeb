import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html'
  })
export class FootersComponent  {

  anio:number;
  constructor() {
    this.anio = new Date().getFullYear();
   }


}
