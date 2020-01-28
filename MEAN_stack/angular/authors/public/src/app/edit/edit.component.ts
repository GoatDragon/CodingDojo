import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any = {name:""}
  errorMessage: any = false;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
        this._httpService.findAuthor(params['id'])
            .subscribe( data => this.editAuthor = data )
    })
  }
  updateAuthor(authorID) {
        this._httpService.updateAuthor(authorID, this.editAuthor)
            .subscribe( data => {
              if (data.errors) {
                this.errorMessage = data.errors.name.message
              } else{
                this._router.navigate(['/']);
              }
        });
  };
}
