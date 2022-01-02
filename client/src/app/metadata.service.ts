import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  // function return metadata from server for url
  // params: url 
  // example getmeta("https://google.com")
  getmeata(url){
    return this.http.get('/api/metadata' +"?url="+url)
  }

  constructor(private http:HttpClient) { }
}
