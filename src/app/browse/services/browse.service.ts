import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private _httpClient:HttpClient) { }

  getBrowseData(type:string):Observable<any>{
    return this._httpClient.get(`https://api.rawg.io/api/${type}?key=d87124f7db1d43e589f7dc1172f27880`)
  }
}
