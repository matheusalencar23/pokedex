import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuIsOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openMenu(): void {
    this.menuIsOpen = true;
  }
}
