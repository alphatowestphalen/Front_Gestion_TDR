import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './controler/post/post.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './controler/dashboard/dashboard.component';
import { TypeProdutComponent } from './controler/type-produt/type-produt.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    TypeProdutComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
