import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private _httpClient:HttpClient) { }

  getBrowseData(type:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/${type}?key=f578ec91c934466faff2d811f1787d56`)
  }
}
