import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.sass' ],
})
export class BooksComponent implements OnInit {
  @Input() name: string;
  @Output() ping = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doClick() {
    this.ping.emit('smash');
  }
}
