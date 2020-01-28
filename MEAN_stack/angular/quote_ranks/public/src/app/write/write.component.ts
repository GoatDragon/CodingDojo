import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  newQuote: any = {quote: ""}
  errorMessage: any = false;
  authorID: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  ngOnInit() {
    this._route.params.subscribe(data => this.authorID = data.id)
  }

  onSubmit() {
    this._httpService.addQuote(this.authorID, this.newQuote)
        .subscribe( data => {
            if (data.errors) {
              this.errorMessage = data.errors.quotes.errors.quote.message
            } else{
              this._router.navigate(['/quote/' + this.authorID]);
            }
        });
  };
}
