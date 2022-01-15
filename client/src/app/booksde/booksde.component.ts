import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-booksde',
  templateUrl: './booksde.component.html',
  styleUrls: ['./booksde.component.scss']
})
export class BooksdeComponent implements OnInit {
  book;
  au
  authorFirstName;
  authorLastName;
  constructor(private bookSRV:BooksService,private authorSRV:AuthorsService) { }

  ngOnInit() {
    this.book = this.bookSRV.book;
    this.authorSRV.getAuthor(this.book.author._path.segments[1]).subscribe(
      res =>{
        this.au = res
        this.authorFirstName = this.au._fieldsProto.firstName.stringValue
        this.authorLastName = this.au._fieldsProto.lastName.stringValue
      }
    )
    console.log(this.book);
  }

}
