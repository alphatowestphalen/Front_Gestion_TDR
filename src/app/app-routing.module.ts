import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './controler/post/post.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'post', component: PostComponent},
  {path: '/', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
