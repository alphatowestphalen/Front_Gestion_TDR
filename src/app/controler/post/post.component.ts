import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit{
  listPost: Post[] = [];

  idPost: string ="";

  constructor(private postService: PostService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getPostsAll()
  }
  
  getPostsAll() {
      return this.postService.getPost().subscribe(data =>{
        this.listPost = data
      }
      
  )}
  deletePostControler(idPost: number): void{
    console.log('====================================');
    console.log(idPost);
    console.log('====================================');
    this.postService.DeletePostService(idPost).subscribe(() =>{
      this.getPostsAll();
    })
  }
  
}
