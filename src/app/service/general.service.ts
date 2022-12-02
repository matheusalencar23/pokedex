import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private _contentPageIsBlocked: boolean = false;

  constructor() {}

  contentPageIsBlocked(): boolean {
    return this._contentPageIsBlocked;
  }

  blockContentPage(): void {
    this._contentPageIsBlocked = true;
  }

  unblockContentPage(): void {
    this._contentPageIsBlocked = false;
  }
}
