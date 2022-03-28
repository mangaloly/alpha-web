import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  is_show: boolean = false;
  is_menu: boolean = false;
  dropDown() {
    this.is_show = !this.is_show;
  }

  openMenu() {
    this.is_menu = !this.is_menu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
