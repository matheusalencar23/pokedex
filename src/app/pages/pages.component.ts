import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../service/general.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  constructor(private _generalService: GeneralService) {}

  ngOnInit(): void {}

  contentPageIsBlocked(): boolean {
    return this._generalService.contentPageIsBlocked();
  }
}
