import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthor(authorid){
    const path = '/authors/' + authorid
    return this.http.get(path)
  }
  getAuthors(){
    return this.http.get('/authors')
  }
  addAuthor(author){
    this.http.post('/authors',author)
  }
  constructor(private http:HttpClient) { }
}
