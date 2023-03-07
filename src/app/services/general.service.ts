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

  convertHexToShadowRgb(hex: string): string {
    const r = this._handleColorShadow(hex.slice(1, 3));
    const g = this._handleColorShadow(hex.slice(3, 5));
    const b = this._handleColorShadow(hex.slice(5));
    return `rgb(${r}, ${g}, ${b})`;
  }

  private _handleColorShadow(color: string): number {
    const colorAsNumber = parseInt(color, 16) - 75;
    return colorAsNumber > 0 ? colorAsNumber : 0;
  }
}
