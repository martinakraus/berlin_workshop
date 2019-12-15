import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ BooksComponent, BookListComponent, BookItemComponent, BookDetailComponent ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
  ],
  exports: [ BooksComponent, BookListComponent ],
})
export class BooksModule {}
