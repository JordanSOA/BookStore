import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public query = '';


  constructor(private http: HttpClient) {
  }
  getBooks() {
    console.log(this.query);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40'));
    }
  }

