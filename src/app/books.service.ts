import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { FileDetector } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public query = '';
  public isbn = '';
  public cookieV: object;
  public cookieC: object;
  public today = Date.now();

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }
  getBooks(): Observable<any> {
    // console.log(this.query);
    this.createCookie();
    // this.addToCart();
    // console.log('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40');
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40'));
  }
  getBookByIsbn(isbn): Observable<any> {
    // console.log('https://www.googleapis.com/books/v1/volumes?q=+' + this.isbn);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=+isbn+' + this.isbn + ' '));
  }

  createCookie() {
    this.cookieService.set('action', 'search', undefined, '/');
    this.cookieService.set('lookedfor', 'https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40');
    this.cookieV = this.cookieService.getAll();
    console.log(this.cookieV);
  }

  createCartCookie() {
    this.cookieService.set('action2', 'selected', undefined, '/');
    this.cookieService.set('toBuy', 'this');
    this.cookieC = this.cookieService.getAll();
    return this.cookieC;
  }

}

