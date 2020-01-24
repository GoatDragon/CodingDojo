import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  temp: any;

  constructor(private _httpService: HttpService) {};

  ngOnInit() {
    this.getDallasWeather()
  }

  getDallasWeather() {
    this._httpService.getDallasWeather()
        .subscribe( data => this.temp = data.main.temp )
  }
}
