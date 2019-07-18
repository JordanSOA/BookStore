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
  }
  constructor(private booksService: BooksService ) {
  }

  search() {
    this.booksService.getBooks().subscribe((data) => {
      console.log(data.items);
      this.books = data.items;
    });
  }
}


