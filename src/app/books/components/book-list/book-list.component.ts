import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private readonly bookDataService: BookDataService) { }

  ngOnInit() {
    this.books = this.bookDataService.getBooks();
  }
}
