import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../../services/book-data.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ],
})
export class BookDetailComponent implements OnInit {
  book: Book;

  constructor(private readonly bookDataService: BookDataService,
              private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.bookDataService.getBookByIsbn('isbn');
  }

}
