import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _httpClient:HttpClient) { }
  messageSource: BehaviorSubject<string> = new BehaviorSubject('');

  
  getAllGames(type:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/${type}?key=f578ec91c934466faff2d811f1787d56`)
  }

  getGameDetails(id:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/games/${id}?key=f578ec91c934466faff2d811f1787d56`)
  }

  getGameScreenshots(id:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/games/${id}/screenshots?key=f578ec91c934466faff2d811f1787d56`)
  }
}
