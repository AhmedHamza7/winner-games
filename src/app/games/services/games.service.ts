import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _httpClient:HttpClient) { }

  getAllGames():Observable<any>{
    return this._httpClient.get('https://api.rawg.io/api/games?key=d87124f7db1d43e589f7dc1172f27880')
  }
}
