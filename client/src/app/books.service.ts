import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http:HttpClient) { }
  book
  getAllBooks(){
    return this.http.get('/book')
  }
  addbook(book){
    this.http.post('/book',book)
  }
}
