import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit{
  listPost: Post[] = [];
  newPost: Post = { id: 0, description:""};
  idPost: number = 0;
  filteredTableData = [...this.listPost];

  constructor(private postService: PostService){}

  ngOnInit(): void {

    this.getPostsAll();
  }
  
  public getPostsAll(){
      return this.postService.getPost().subscribe(data =>{
        this.listPost = data
      }
      
  )}
  
  public savePost( ):void {
    this.postService.savePost(this.newPost).subscribe(()=>{
      this.getPostsAll();
    }
    )
  }
  filterTable(event: any): void {
    const value = event.target.value.toLowerCase();
    this.filteredTableData = this.listPost.filter(row =>
      (value) !== -1
    );
  }
    public finByIdControler(id:number){
      return this.postService.findById(id).subscribe(data =>{
     this.newPost = {id:0, description:""};
        this.newPost = data;
      });
    }

  public updatePost(){
   this.postService.updatePost(this.newPost).subscribe(data =>{
     this.getPostsAll();

   });
  }
  
  public deletePostControler(idPost: number): void{
      this.postService.DeletePostService(idPost).subscribe(() =>{
        this.getPostsAll();
    })
  }

  public getFindEndId(){
    this.newPost = {id: 0, description:""}
      return this.postService.getLatestPostService().subscribe(data=>{
        this.newPost.id = data.id + 1; 
      })
  }
  
}
