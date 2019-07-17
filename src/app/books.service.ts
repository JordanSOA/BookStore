import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private api: string = 'https://www.googleapis.com/books/v1/';
  livres = null;

  constructor(private http: HttpClient) {
    // http.get('https://www.googleapis.com/books/v1/volumes?q=me').subscribe((data) => {
    //   console.log(data);
    //   this.livres = data;
    //   console.log(this.livres);
    // });
  }

  searchB(searchB: string) {
    return (this.http.get(this.api + 'volumes?q=' + searchB + '&maxresults=40' ));

  }

  // getBooks() {
  //   return [
  //     {title: 'ok', author: 'me', price: 2.99},
  //   {title: 'nope', author: 'you', price: 2.99},
  //   {title: 'wow', author: 'him', price: 2.99}
  //   ];
  // }
}
