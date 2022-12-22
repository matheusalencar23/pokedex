import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  menuIsOpen: boolean = false;

  constructor(private _generalService: GeneralService,private _router: Router) {}

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
    this._router.navigate([route])
  }

  @HostListener('window:resize')
  resizeWindow() {
    if (window.innerWidth > 768 && this.menuIsOpen) {
      this.menuIsOpen = false;
      this._generalService.unblockContentPage();
    }
  }
}
