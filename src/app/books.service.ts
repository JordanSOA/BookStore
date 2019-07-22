import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public query = '';
  public isbn = '';
  public cookieV: object;
  public today = Date.now();


  constructor(private http: HttpClient, private cookieService: CookieService) {
  }
  getBooks(): Observable<any> {
    console.log(this.query);
    this.createCookie();
    console.log('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40');
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40'));
  }
  getBookByIsbn(isbn): Observable<any> {
    console.log('https://www.googleapis.com/books/v1/volumes?q=+' + this.isbn);
    return (this.http.get('https://www.googleapis.com/books/v1/volumes?q=+isbn+' + this.isbn + ' '));
  }
  createCookie() {
    this.cookieService.set('id', 'voila', undefined, '/');
    this.cookieService.set('lookesfor', 'https://www.googleapis.com/books/v1/volumes?q=' + this.query + '&maxResults=40');
    this.cookieV = this.cookieService.getAll();
    console.log(this.cookieV);
  }

}

