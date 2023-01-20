import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {
  @Input() pokemon: IPokemon | null = null;

  constructor() {}
}
