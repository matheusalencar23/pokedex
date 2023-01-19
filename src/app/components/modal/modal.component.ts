import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 0.5 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
    trigger('modal', [
      transition(':enter', [
        style({ transform: 'scale(0.5) translate(-50%, -50%)', opacity: 0 }),
        animate(
          '250ms',
          style({ transform: 'scale(1) translate(-50%, -50%)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms',
          style({ transform: 'scale(0.5) translate(-50%, -50%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
