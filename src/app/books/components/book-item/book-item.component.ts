import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { HeaderService } from '../../../shared/services/header.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: [ './book-item.component.scss' ],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  constructor(private readonly headerService: HeaderService) { }

  ngOnInit() {
  }

  setHeader(isbn: string) {
    this.headerService.setHeader(isbn);
  }
}
