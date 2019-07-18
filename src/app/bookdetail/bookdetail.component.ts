import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  public bookD: object;

  constructor(private booksService: BooksService ) {
  }

  ngOnInit() {
  }
  searchIsbn() {
    this.booksService.getBookByIsbn().subscribe((data) => {
      this.bookD =  data.items[0].volumeInfo;
      console.log(this.bookD);
      //console.log(bookSale);
    });
  }

}
