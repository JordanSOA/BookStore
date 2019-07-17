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
    this.booksService.getBooks().subscribe((data) => {
      console.log(data.items);
      this.books = data.items;
      for (let [key, value] of Object.entries(this.books)) {
        console.log(`${key}: ${value}`);
      }
    });
    console.log(this.books);
  }
  constructor(private booksService: BooksService ) {
  }

  }


