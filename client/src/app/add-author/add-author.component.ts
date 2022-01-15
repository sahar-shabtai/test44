import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Author } from '../interfaces/author';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  firstname:string;
  lastname:string;

  constructor(private authorSRV:AuthorsService) { }
  onSubmit(){
    const author:Author = {
      firstName: this.firstname,
      lastName: this.lastname
    }
    this.authorSRV.addAuthor(author);
  }
  ngOnInit() {
  }

}
