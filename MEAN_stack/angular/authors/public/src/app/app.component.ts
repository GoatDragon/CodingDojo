import { Component } from '@angular/core';
// import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    authors: any = []
    constructor(){}
    // constructor(private _httpService: HttpService){}

    // ngOnInit() {
    //   this.getAuthorsFromService();
    // }
    // getAuthorsFromService() {
    //   this._httpService.getAuthors()
    //     .subscribe( data => { this.authors = data });
    // };
    // deleteAuthor(authorID) {
    //   this._httpService.deleteAuthor(authorID)
    //       .subscribe( data => { this.getAuthorsFromService() });
    // };
}
