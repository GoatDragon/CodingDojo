import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author: any = {};

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  ngOnInit() {
    this.getAuthorQuotes()
  }

  getAuthorQuotes(){
    this._route.params.subscribe((params: Params) => {
        this._httpService.findAuthor(params['id'])
            .subscribe( data => {
                this.author = data 
            })
    })
  }

  deleteQuote(quoteObject) {
    this._httpService.deleteQuote(this.author._id, quoteObject)
        .subscribe( data => { this.getAuthorQuotes() });
  };

  upVote(quoteID) {
    let info = {authID: this.author._id, quoteID: quoteID}
    this._httpService.upVote(info)
        .subscribe( data => { this.getAuthorQuotes() });
  }

  downVote(quoteID) {
    let info = {authID: this.author._id, quoteID: quoteID}
    this._httpService.downVote(info)
        .subscribe( data => { this.getAuthorQuotes() });
  }
}
