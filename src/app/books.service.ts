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
  getBookByIsbn(isbn): Observable<any> {
    console.log('https://www.googleapis.com/books/v1/volumes?q=+' + this.isbn);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=+isbn+' + this.isbn + ' '));
    // return this.http.get(url);
  }

}

