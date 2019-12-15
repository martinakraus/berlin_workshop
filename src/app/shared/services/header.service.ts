import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerSubject = new Subject<string>();

  getHeader(): Observable<string> {
    return this.headerSubject.asObservable();
  }

  setHeader(headerTitle: string) {
    this.headerSubject.next(headerTitle);
  }
}
