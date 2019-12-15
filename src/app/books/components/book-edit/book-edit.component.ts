import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: [ './book-edit.component.scss' ],
})
export class BookEditComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
    this.route.params.pipe(
      pluck('isbn'),
      switchMap(isbn => this.bookDataService.getBookByIsbn(isbn)),
    )
      .subscribe(book => this.book = book);
  }

  onSubmit(value) {
    this.bookDataService.updateBook(this.book.isbn, value)
      .subscribe((book: Book) => console.log('Book updated', book));
  }

}
