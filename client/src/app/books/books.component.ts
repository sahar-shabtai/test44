import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books;
  constructor(private bookSRV:BooksService, private router:Router) { }
  go(book){
    console.log(book)
    this.bookSRV.book =book; 
    this.router.navigate(['/book']);
  }
  ngOnInit() {
    this.bookSRV.getAllBooks().subscribe(
      res => {
        this.books = res,
        console.log(this.books[0].author._path.segments)
    })
  }

}
