import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books = [];

  ngOnInit() {
  console.log(this.booksService.getBooks());
  this.books.push(this.booksService.getBooks());
  console.log(this.books);
  }
  constructor(private booksService: BooksService ) {
    // this.books = this.booksService.getBooks();
    // console.log(this.books);
    // this.fillBooks();
   // this.books = this.booksService.getBooks();
  }

  // fillBooks() {
  //   let i = 0;
  //   for ( i  of this.booksService.getBooks()) {
  //     console.log('ok');
  //     while (i < this.books.length) {
  //       this.books = this.booksService.livres[i].volumeInfo.title;
  //       console.log('ok');
  //     }
  //   }
  }


