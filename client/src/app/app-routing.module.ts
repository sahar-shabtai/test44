import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BooksdeComponent } from './booksde/booksde.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book', component: BooksdeComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'addauthor', component: AddAuthorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
