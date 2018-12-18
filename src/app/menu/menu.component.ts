import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  miostile: object;
  mieClassi: object;
  isCentered: boolean;
  isBlue: boolean;
  constructor() {
    this.isCentered = false;
    this.isBlue = true;
    this.miostile = {'font-size': '24px', 'color': 'red'};
    this.mieClassi = {'text-center': this.isCentered, 'light-blue': this.isBlue};
  }

}
