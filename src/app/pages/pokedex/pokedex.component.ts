import { Component, OnInit } from '@angular/core';
import { ISimplePokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  page: number = 0;
  quantityPerPage: number = 20;
  pokemonsDisplayed: ISimplePokemon[] = [];

  private _pokemons: ISimplePokemon[] = [];

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this._pokemonService.getAllPokemons();
    this.getPokemons();
  }

  getPokemons(): void {
    this._pokemonService.pokemons$.subscribe((res) => {
      this._pokemons = res;
      this.handlePokemonsDisplayed();
    });
  }

  handlePokemonsDisplayed(): void {
    this.pokemonsDisplayed.push(
      ...this._pokemons.slice(
        this.page * this.quantityPerPage,
        this.page * this.quantityPerPage + this.quantityPerPage
      )
    );
  }

  loadMore(): void {
    this.page++;
    this.handlePokemonsDisplayed();
  }

  handleSearchTerm(term: string): void {
    if (term) {
      this.page = 0;
      this.pokemonsDisplayed = [];
      const filterd = this._pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );

      this.pokemonsDisplayed.push(
        ...filterd.slice(
          this.page * this.quantityPerPage,
          this.page * this.quantityPerPage + this.quantityPerPage
        )
      );
    }
  }
}
