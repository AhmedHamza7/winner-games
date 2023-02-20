import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _httpClient:HttpClient) { }

  getAllGames(type:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/${type}?key=d87124f7db1d43e589f7dc1172f27880`)
  }

  getGameDetails(id:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/games/${id}?key=d87124f7db1d43e589f7dc1172f27880`)
  }

  getGameScreenshots(id:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/games/${id}/screenshots?key=d87124f7db1d43e589f7dc1172f27880`)
  }
}
