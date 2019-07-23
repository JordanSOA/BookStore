import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books = [];
  public bookD: object;
  // public cookieV: object;
  // public today = Date.now();

  ngOnInit() {
  }
  constructor(private booksService: BooksService, private route: ActivatedRoute) {
  }

  addToCart() {
    console.log(this.books[0].volumeInfo.title);
    const cartCookie = this.booksService.createCartCookie();
    console.log(cartCookie);
  }

  search() {
    this.booksService.getBooks().subscribe((data) => {
      this.books = data.items;
    });
  }
  searchIsbn(isbn) {
    this.booksService.getBookByIsbn(isbn).subscribe((data) => {
      this.bookD = data.items[0];
    });
  }
}
