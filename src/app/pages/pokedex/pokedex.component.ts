import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  term: string = '';
  pokemonsDisplayed: ISimplePokemon[] = [];
  loading$: Observable<boolean> = new Observable();

  private _pokemons: ISimplePokemon[] = [];

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loading$ = this._pokemonService.loading$;
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
    const pokemonsDisplayed = this.term
      ? this._pokemons
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(this.term.toLowerCase())
          )
          .slice(
            this.page * this.quantityPerPage,
            this.page * this.quantityPerPage + this.quantityPerPage
          )
      : this._pokemons.slice(
          this.page * this.quantityPerPage,
          this.page * this.quantityPerPage + this.quantityPerPage
        );
    this.pokemonsDisplayed.push(...pokemonsDisplayed);
  }

  loadMore(): void {
    this.page++;
    this.handlePokemonsDisplayed();
  }

  handleSearchTerm(term: string): void {
    if (term) this.page = 0;
    this.term = term;
    this.pokemonsDisplayed = [];
    this.handlePokemonsDisplayed();
  }
}
