import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public query = '';
  public isbn = 0;


  constructor(private http: HttpClient) {
  }
  getBooks() {
    console.log(this.query);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40'));
  }
  getBookByIsbn() {
    let byIsbn = this.isbn || '9782012804401';
    const url = ('https://www.googleapis.com/books/v1/volumes?q=+isbn:' + byIsbn + '&maxResults=40');
    return this.http.get(url);
  }

}

