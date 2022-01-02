import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MetadataService } from '../metadata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url:string; // input for url 
  resMetaData; // response from serve, metadata for this url 
  err:string; // An error message is displayed to the user if the URL is incorrect 
  constructor(private meta:MetadataService) { }

  //** function that use when user send from.
  //** this function send url and get meatadata for it
  //** if get error for url, than catch error and return message to user 
  onSubmit(){
    this.meta.getmeata(this.url).subscribe(
      (res) =>{
        this.err=null;
        this.resMetaData = res;
      },(err) =>{
        this.resMetaData = null;
        this.err = "This site not valid, please check"
      }
    )
  }

/**function that use when metadata-image start with url 
 * example:
 * metadata-image = https://google.com/pic.png - function work
 * metadata-image = pic.png - function don't work
 */
  onImgError(event){
    event.target.src = this.resMetaData.image
  }

  ngOnInit() {

  }

}


