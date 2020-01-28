import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
    authors: any = []
    constructor(private _httpService: HttpService){}

    ngOnInit() {
      this.getAuthorsFromService();
    }
    getAuthorsFromService() {
      this._httpService.getAuthors()
        .subscribe( data => { 
          let authors = data;
          authors.sort(function(a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          this.authors = authors });
    };
    deleteAuthor(authorID) {
      this._httpService.deleteAuthor(authorID)
          .subscribe( data => { this.getAuthorsFromService() });
    };
}

