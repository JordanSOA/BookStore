import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books = [];
  public bookD: object;
  public cookieV: object;
  today: number = Date.now();

  ngOnInit() {
  }
  constructor(private booksService: BooksService, private route: ActivatedRoute, private cookieService: CookieService) {
  }

  search() {
    this.booksService.getBooks().subscribe((data) => {
      console.log(data.items);
      this.books = data.items;
      this.cookieService.set('id', 'cookie1');
      this.cookieService.set('value', 'TEST');
      this.cookieV =  this.cookieService.getAll();
      // const allCookies = this.cookieService.get(this.cookieV);
      console.log(this.cookieV);
      // console.log(allCookies + ' all');
    });
  }
  searchIsbn(isbn) {
    this.booksService.getBookByIsbn(isbn).subscribe((data) => {
      this.bookD = data.items[0];
      console.log(this.bookD);
    });
  }
}
