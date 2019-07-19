import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';


const routes: Routes = [
{path: 'booksList', component: BooksListComponent},
{path: 'booksList/bookdetail', component: BookdetailComponent},
{path: '', redirectTo: 'booksList', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    BooksListComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
