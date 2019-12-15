import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${ environment.baseUrl }/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${ environment.baseUrl }/books/${ isbn }`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${ environment.baseUrl }/books`, book);
  }

  updateBook(isbn: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${ environment.baseUrl }/books/${ isbn }`, book);
  }
}
