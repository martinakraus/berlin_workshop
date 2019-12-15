import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../../services/book-data.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private readonly bookDataService: BookDataService,
              private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.book$ = this.route.params
      .pipe(
        pluck('isbn'),
        switchMap(isbn => this.bookDataService.getBookByIsbn(isbn)),
      );


    /*  .subscribe(
        isbn => this.bookDataService.getBookByIsbn(isbn)
          .subscribe(book => this.book = book),
      );*/
  }

}
