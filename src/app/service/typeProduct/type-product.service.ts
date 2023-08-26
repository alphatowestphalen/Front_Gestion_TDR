import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { TypeProduct } from 'src/app/model/TypeProduct';
import { environment } from 'src/environment/environement';

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {
 private _url = environment.url;
 private typeProduct:TypeProduct[] = [];

  constructor(private _http:HttpClient) { }

  public getTypeProductAll(){
    return this._http.get<TypeProduct[]>(this._url + "/typeProduct");
  }
}
