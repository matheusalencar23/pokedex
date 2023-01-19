import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.visible = false;
  }
}
