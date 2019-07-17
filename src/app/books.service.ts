import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }
  getBooks() {
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=Alice'));
    }
  }

