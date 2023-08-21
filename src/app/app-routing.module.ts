import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './controler/post/post.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'post', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
