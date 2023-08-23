import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environement';
import { Post } from '../model/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url = environment.url;
  private idPost: string ="";
  private post:Post[] = [];
  constructor(private _http: HttpClient) { }
  
  // get all poste
  getPost(){
    return this._http.get<Post[]>( this._url + "/posts")
  }

// Add post 
  public savePost(post:Post): Observable<Post>{
    return this._http.post<Post>( this._url + "/post", post);
  }

  // update poste
  public updatePost(post:Post): Observable<Post>{ 
    return this._http.put<Post>(this._url + "/post/"+post.id, post);
  }

  // find by Id
  public findById(id:number): Observable<Post>{
    return this._http.get<Post>(this._url +"/post/" + id);
}

// delete poste
  DeletePostService(id: number){
    return this._http.delete <Post[]>(this._url+ "/post/"+id);
  }

// findLatestPost
  public getLatestPostService(): Observable<Post>{
    return this._http.get <Post>(this._url+ "/post/EndId");
  }
  
}
