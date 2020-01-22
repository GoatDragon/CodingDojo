import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: any = {baker: "", image: ""};
  newComment: any = {comment: "", rating: ""};
  cakes: any = [];

  constructor(private _httpService: HttpService) {}
  ngOnInit() { this.getCakesFromService() }

  getCakesFromService() {
    this._httpService.getCakes()
        .subscribe( data => { this.cakes = data });
  };

  addCake() {
    this._httpService.addCake(this.newCake)
        .subscribe( data => {
            this.newCake = {baker: "", image: ""}
            this.getCakesFromService()
        });
  };

  addComment() {
    this._httpService.addComment(this.newComment)
        .subscribe( data => {
            this.newComment = {comment: "", rating: ""}
        });
  };

  deleteCake(cakeID) {
    this._httpService.deleteCake(cakeID)
        .subscribe( data => { this.getCakesFromService() });
  };

};
