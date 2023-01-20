import { Component, Input } from '@angular/core';
import { ColorType } from 'src/app/models/pokemon';

@Component({
  selector: 'app-type-tip',
  templateUrl: './type-tip.component.html',
  styleUrls: ['./type-tip.component.scss'],
})
export class TypeTipComponent {
  @Input() type: string = '';

  constructor() {}

  getBackgroundColor(): string {
    return (
      Object.entries(ColorType).find(
        ([key, value]) => key === this.type
      )?.[1] || ColorType.not_found
    );
  }
}
