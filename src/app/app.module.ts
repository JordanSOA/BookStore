import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchbComponent } from './searchb/searchb.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    SearchbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
