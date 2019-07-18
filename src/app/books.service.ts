import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public query = '';
  public isbn = '';


  constructor(private http: HttpClient) {
  }
  getBooks(): Observable<any> {
    console.log(this.query);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40'));
  }
  getBookByIsbn(): Observable<any> {
    //const url = (`https://www.googleapis.com/books/v1/volumes?q=+isbn:${this.isbn}`);
    console.log(this.isbn);
    console.log('https://www.googleapis.com/books/v1/volumes?q=+' + this.isbn);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=+' + this.isbn + ' '));
    // return this.http.get(url);
  }

}

