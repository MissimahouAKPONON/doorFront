import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import decode from 'jwt-decode';
import {User} from "../_models";




@Injectable({
  providedIn: 'root'
})
export class AuthService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "*"
    })
  };

  config = "https://salty-headland-77559.herokuapp.com/api/";
  constructor(private _httpClient: HttpClient) { }
  get(url: any) {
    return this._httpClient.get(this.config + url);
  }
  getAll(url: any) {
    return this._httpClient.get(this.config + url).pipe(
        map((data: any) => {
          return data.data;
        })
    );
  }
  post(url: any, data: any  ) {
    return this._httpClient.post(this.config + url, data, this.httpOptions);
  }




}
