import { Component, Input } from '@angular/core';
import { ISimplePokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent {
  @Input() pokemons: ISimplePokemon[] = [];

  constructor() {}
}
