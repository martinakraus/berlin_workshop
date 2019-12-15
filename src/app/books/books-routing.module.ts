import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookNewComponent } from './components/book-new/book-new.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: ':isbn',
    component: BookDetailComponent,
  },
  {
    path: ':isbn/edit',
    component: BookEditComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BooksRoutingModule {}
