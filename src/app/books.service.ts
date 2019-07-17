import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public livres = [];

  constructor(private http: HttpClient) {
    /* http.get('https://www.googleapis.com/books/v1/volumes?q=Alice').subscribe((data) => {
      // console.log(data.items);
      this.livres = data.items;
      let title = this.livres[3].volumeInfo.title;
      //console.log(title);
      console.log(this.getBooks());
    }); */
    this.getBooks();
  }
  getBooks() {
    // return [ this.livres[2].volumeInfo.title ];
    this.http.get('https://www.googleapis.com/books/v1/volumes?q=Alice').subscribe((data) => {
      //console.log(Object.getOwnPropertyNames(data));
      //console.log(Object.keys(data));
      let ok = data.items[0].volumeInfo;
      //console.log(ok);
      for (let [key, value] of Object.entries(ok)) {
        console.log(`${key}: ${value}`);
      }
      // let title = this.livres[0].volumeInfo.title;
      //console.log(title);
    });
    return this.livres;
    }
  }

