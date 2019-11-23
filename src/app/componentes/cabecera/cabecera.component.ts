import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  menuPress = "block";

  constructor() { }

  ngOnInit() {
  }

  w3_open() {
    if (this.menuPress == "block") {
      this.menuPress = "none";
    } else {
      this.menuPress = "block";
    }
  }
}
