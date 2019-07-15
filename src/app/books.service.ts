import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  livres = null;

  constructor(private http: HttpClient) {
    http.get('https://www.googleapis.com/books/v1/volumes?q=Alice').subscribe((data) => {
      console.log(data);
      this.livres = data.items;
      console.log(this.livres[0].volumeInfo.authors);
      console.log(this.livres[0].volumeInfo.title);
      console.log(this.livres[0].volumeInfo.publishedDate);
    });
  }
  // getBooks() {
  //   return [
  //     {title: 'ok', author: 'me', price: 2.99},
  //   {title: 'nope', author: 'you', price: 2.99},
  //   {title: 'wow', author: 'him', price: 2.99}
  //   ];
  // }
}
