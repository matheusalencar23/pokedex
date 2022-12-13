import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.scss'],
})
export class SpecialButtonComponent {
  @Input() backgroundColor: string = '';

  constructor() {}
}
