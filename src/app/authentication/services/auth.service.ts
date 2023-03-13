import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _HttpClient:HttpClient) { }

  RegisterApi(registerData:object):Observable<any>{
    return this._HttpClient.post('https://route-movies-api.vercel.app/signup',registerData)
  }
}
