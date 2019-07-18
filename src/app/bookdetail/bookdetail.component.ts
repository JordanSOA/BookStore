import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  public bookD: object;

  ngOnInit() {
  }
  constructor(private booksService: BooksService ) {}
  searchIsbn() {
    this.booksService.getBookByIsbn().subscribe((data) => {
      this.bookD =  data.items[0];
      console.log(this.bookD);
    });
  }

}
