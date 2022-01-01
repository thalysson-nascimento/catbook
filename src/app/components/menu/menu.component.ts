import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    return this.showMenu = !this.showMenu;
  }
}
