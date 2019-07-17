import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-searchb',
  templateUrl: './searchb.component.html',
  styleUrls: ['./searchb.component.css']
})
export class SearchbComponent implements OnInit {

  constructor(private booksService: BooksService) {
    this.booksService.searchB('flower');
  }
  ngOnInit() {
  }

}
