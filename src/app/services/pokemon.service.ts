import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APISimplePokemon, ISimplePokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _url = environment.apiUrl;
  private _pokemons = new BehaviorSubject<ISimplePokemon[]>([]);

  pokemons$ = this._pokemons.asObservable();

  constructor(private _http: HttpClient) {}

  getAllPokemons(): void {
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
      });
  }

  private _handleParams(params: Object): HttpParams {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number')
        httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }
}
