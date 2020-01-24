import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-francisco',
  templateUrl: './san-francisco.component.html',
  styleUrls: ['./san-francisco.component.css']
})
export class SanFranciscoComponent implements OnInit {
  temp: any;

  constructor(private _httpService: HttpService) { }

 ngOnInit() {
   this.getSFWeather()
 }

 getSFWeather() {
   this._httpService.getSFWeather()
       .subscribe( data => this.temp = data.main.temp )
 }
}
