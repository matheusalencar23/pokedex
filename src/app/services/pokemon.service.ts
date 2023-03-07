import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APISimplePokemon, IPokemon, ISimplePokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _url = environment.apiUrl;
  private _pokemons = new BehaviorSubject<ISimplePokemon[]>([]);
  private _loading = new BehaviorSubject<boolean>(false);

  pokemons$ = this._pokemons.asObservable();
  loading$ = this._loading.asObservable();

  constructor(private _http: HttpClient) {}

  set loading(value: boolean) {
    this._loading.next(value);
  }

  getAllPokemons(): void {
    this._loading.next(true);
    const params = this._handleParams({ limit: 2000, offset: 0 });
    this._http
      .get<APISimplePokemon>(`${this._url}/pokemon`, { params })
      .subscribe({
        next: (res) => {
          this._pokemons.next(res.results);
        },
        error: () => {
          this._pokemons.next([]);
        },
        complete: () => this._loading.next(false),
      });
  }

  getPokemonDetails(pokemonName: string): Observable<IPokemon> {
    return this._http.get<IPokemon>(`${this._url}/pokemon/${pokemonName}`);
  }

  private _handleParams(params: Object): HttpParams {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number')
        httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }

  getImage(pokemon: IPokemon): string {
    if (pokemon?.sprites?.other?.home?.front_default)
      return pokemon?.sprites.other.home.front_default;
    if (pokemon?.sprites?.other?.dream_world?.front_default)
      return pokemon?.sprites?.other?.dream_world?.front_default;
    if (pokemon?.sprites?.other?.['official-artwork']?.front_default)
      return pokemon?.sprites?.other?.['official-artwork']?.front_default;
    return pokemon?.sprites?.front_default || '';
  }
}
