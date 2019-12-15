import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookDataService } from '../../services/book-data.service';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ],
})
export class BookListComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  subscription: Subscription;

  constructor(private readonly bookDataService: BookDataService) { }

  ngOnInit() {
    this.books$ = this.bookDataService.getBooks().pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      }),
    );


    /* this.subscription = this.bookDataService.getBooks()
       .pipe(
         tap(books => console.log(books)),
         catchError(err => {
           console.log(err);
           return EMPTY;
         }),
       )
       .subscribe(
         books => this.books = books,
         error => console.log(error),
         () => console.log('finish'),
       );*/
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
