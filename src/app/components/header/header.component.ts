import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/service/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuIsOpen: boolean = false;

  constructor(private _generalService: GeneralService) {}

  ngOnInit(): void {}

  openMenu(): void {
    this.menuIsOpen = true;
    this._generalService.blockContentPage();
  }

  redirectTo(route: string) {
    this.menuIsOpen = false;
    this._generalService.unblockContentPage();
  }
}
