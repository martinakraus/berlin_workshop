import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { BookDataService } from '../../services/book-data.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: [ './book-new.component.scss' ],
})
export class BookNewComponent implements OnInit {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly bookService: BookDataService) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [ '', Validators.required ],
      author: [ '', Validators.required ],
    });
  }

  onSubmit() {
    const book: Book = {
      isbn: '',
      title: this.form.value.title,
      author: this.form.value.author,
      subtitle: '',
      abstract: '',
      numPages: 123,
      publisher: {
        name: '',
        url: '',
      },
    };
  }
}
