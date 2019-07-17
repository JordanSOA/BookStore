import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books = [];

  // constructor(private booksService: BooksService ) {
  //   this.books = this.booksService.getBooks();
  // }

  constructor(private booksService: BooksService) {
    this.booksService.searchB('flower').subscribe((data) => {
      console.log(data);

    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
