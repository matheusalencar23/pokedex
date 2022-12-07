import { Component, HostListener, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  menuIsOpen: boolean = false;

  constructor(private _generalService: GeneralService) {}

  ngOnInit(): void {}

  contentPageIsBlocked(): boolean {
    return this._generalService.contentPageIsBlocked();
  }

  clickPage(): void {
    if (this.menuIsOpen) {
      this.menuIsOpen = false;
      this._generalService.unblockContentPage();
    }
  }

  openMenu(): void {
    this.menuIsOpen = true;
    this._generalService.blockContentPage();
  }

  navigateTo(route: string) {
    this.menuIsOpen = false;
    this._generalService.unblockContentPage();
    console.log(route);
  }

  @HostListener('window:resize')
  resizeWindow() {
    if (window.innerWidth > 768 && this.menuIsOpen) {
      this.menuIsOpen = false;
      this._generalService.unblockContentPage();
    }
  }
}
