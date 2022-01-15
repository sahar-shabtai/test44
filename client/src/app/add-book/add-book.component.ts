import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { BooksService } from '../books.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  authors
  authorid:string;
  isbn:string;
  bookName:string;

  constructor(private authorsSRV:AuthorsService, private bookSRV:BooksService) { }
  
  onSubmit(){
    const newbook:Book = {
      bookName:this.bookName,
      isbn: this.isbn,
      author: "authors/"+ this.authorid
    }
    this.bookSRV.addbook(newbook);
  }
  ngOnInit() {
    this.authorsSRV.getAuthors().subscribe(
      res => this.authors = res
    )
  }

}
