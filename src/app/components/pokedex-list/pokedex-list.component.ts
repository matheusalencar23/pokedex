import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon, ISimplePokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent {
  @Input() pokemons: ISimplePokemon[] = [];

  @Output() openModal = new EventEmitter<IPokemon>();

  constructor() {}
}
