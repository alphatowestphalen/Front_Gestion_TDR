import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
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

  public delateType( id: number){
    return this._http.delete<TypeProduct[]>(this._url + "/typeProduct/"+ id);
  }

  public  findEndId():Observable<TypeProduct>{
    return this._http.get<TypeProduct>(this._url + "/typeProduct/findLastType");
  }

  public saveTypeProduct(type: TypeProduct): Observable<TypeProduct>{
    return this._http.post<TypeProduct>(this._url + "/typeProduct", type);
  }

  public findById(id:number):Observable<TypeProduct>{
    return this._http.get<TypeProduct>(this._url + "/typeProduct/"+ id);
  }

  public updateTypeProduct(type:TypeProduct):Observable<TypeProduct>{
    return this._http.put<TypeProduct>(this._url + "/typeProduct/"+ type.id,type);
  }
}
