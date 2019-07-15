import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  livres = [];

  constructor(private http: HttpClient) {
    http.get('https://www.googleapis.com/books/v1/volumes?q=Alice').subscribe((data) => {
      console.log(data.items);
      this.livres = data.items;
      let title = this.livres[3].volumeInfo.title;
      console.log(title);
      console.log(this.getBooks());
    });
  }
  getBooks() {
    // return [ this.livres[2].volumeInfo.title ];
    return [this.livres];
    }
  }

