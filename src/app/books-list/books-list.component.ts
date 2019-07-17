import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books = [];
  public bookD = [];

  ngOnInit() {
  }
  constructor(private booksService: BooksService ) {
  }

  search() {
    this.booksService.getBooks().subscribe((data) => {
      console.log(data.items);
      this.books = data.items;
      // for (let [key, value] of Object.entries(this.books)) {
      //   console.log(`${key}: ${value}`);
      // }
    });
  }

  // IN WORKS...............

  // searchIsbn() {
  //   this.booksService.getBookByIsbn().subscribe((data) => {
  //     this.bookD = data.items[0].volumeInfo;
  //     const bookSale = this.bookD;
  //     // console.log(this.bookD[0].volumeInfo.title);
  //     console.log(this.bookD);
  //     console.log(bookSale);
  //   });
  // }
  }


