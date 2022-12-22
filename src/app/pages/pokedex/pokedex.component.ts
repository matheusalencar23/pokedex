import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  offset: number = 0;
  limit: number = 20;

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this._pokemonService
      .getPokemons({ offset: this.offset, limit: this.limit })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
