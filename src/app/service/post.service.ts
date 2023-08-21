import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environement';
import { Post } from '../model/Post';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url = environment.url;
  private idPost: string ="";

  constructor(private _http: HttpClient) { }
  
  
  getPost(){
    return this._http.get<Post[]>( this._url + "/posts")
  }
  DeletePostService(id: number){
    return this._http.delete <Post[]>(this._url+ "/post/"+id);
  }
}
