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
  cakeDisplay: any = false;

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

  addComment(cakeID) {
    this._httpService.addComment(this.newComment, cakeID)
        .subscribe( data => {
            this.newComment = {comment: "", rating: ""}
            this.getCakesFromService()
        });
  };

  deleteCake(cakeID) {
    this._httpService.deleteCake(cakeID)
        .subscribe( data => { this.getCakesFromService() });
  };

  showCake(inputCake) {
    this.cakeDisplay = inputCake;
    let total = 0;
    let amt = 0;
    for (let comment of inputCake.comments) {
      total += parseInt(comment.rating)
      amt ++
    }
    let ratingAvg = total / amt
    this.cakeDisplay.avgRating = ratingAvg
  };

};
