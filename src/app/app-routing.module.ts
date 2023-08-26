import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './controler/post/post.component';
import { DashboardComponent } from './controler/dashboard/dashboard.component';
import { TypeProdutComponent } from './controler/type-produt/type-produt.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'post', component: PostComponent},
  {path: 'typeProduct', component: TypeProdutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
