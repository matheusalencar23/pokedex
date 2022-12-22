import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_URL = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getPokemons(params: any): Observable<any> {
    const httpParams = this.handleParams(params);
    return this._http.get<Observable<any>>(`${this.API_URL}/pokemon`, {
      params: httpParams,
    });
  }

  private handleParams(params: Object): HttpParams {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (typeof value === 'string' || typeof value === 'number')
        httpParams = httpParams.append(key, value);
    });
    return httpParams;
  }
}
