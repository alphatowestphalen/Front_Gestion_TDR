import { Component, OnInit } from '@angular/core';
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
  searchTerm: any;
  filteredItems = this.listPost;
  dataPagination = this.listPost ;
  pageSize : number = 5;   
  pageCount : number =0;   
  currentPage = 1; // Current page number



  constructor(private postService: PostService){}

  ngOnInit(): void {
    this.getPostsAll();
    this.getNbrPagination();
  }
  searchItems(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredItems = this.listPost.filter(item =>
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.listPost;
    }
  }
  // getPagination(data:any[]): any[] {
  //   const start = (this.currentPage - 1) * this.pageSize;
  //   const end = start + this.pageSize;
  //   return data.slice(start, end);
  // }
  public getPostsAll(){    
      return this.postService.getPost().subscribe(data =>{
        this.listPost = data
        this.filteredItems = data;
      }
  )}
  
  public savePost( ):void {
    this.postService.savePost(this.newPost).subscribe(()=>{
      this.getPostsAll();
    }
    )
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
  public getNbrPagination() {
    this.postService.getPost().subscribe(data => {
      this.dataPagination = data; 
      this.pageSize = Math.ceil(this.dataPagination.length / 5); 
    });
  }  

  getPaginationArray(): number[] {
    this.postService.getPost().subscribe(data => {
      this.pageCount = Math.ceil(data.length / this.pageSize);
    });
    return Array.from({ length: this.pageCount }, (_, index) => index + 1);
  }
}
