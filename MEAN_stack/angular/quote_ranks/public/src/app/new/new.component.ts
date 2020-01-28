import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  newAuthor: any = {name: ""}
  errorMessage: any = false;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ){}

  onSubmit() {
    this._httpService.addAuthor(this.newAuthor)
        .subscribe( data => {
            if (data.errors) {
              this.errorMessage = data.errors.name.message
            } else{
              this._router.navigate(['/']);
            }
        });
  };
}
