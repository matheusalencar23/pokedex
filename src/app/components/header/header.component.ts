import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() menuIsOpen: boolean = false;

  @Output() openMenuEvent = new EventEmitter<void>();
  @Output() navigateToEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  openMenu(): void {
    this.openMenuEvent.emit();
  }

  navigateTo(route: string) {
    this.navigateToEvent.emit(route);
  }
}
