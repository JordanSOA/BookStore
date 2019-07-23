import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css'],
})
export class BookdetailComponent implements OnInit {
  // public bookD: object;
  public id = '';

  constructor(private booksService: BooksService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.isbn;
      console.log(this.id);
      this.booksService.getBookByIsbn(this.id);
    });
  }

  }

