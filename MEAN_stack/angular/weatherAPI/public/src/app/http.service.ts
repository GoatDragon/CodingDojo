import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) {}

    getDallasWeather(): any {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&APPID=df7114577bbb4c778e4b4b5d6e79acf6&units=imperial')
    }
    getSFWeather(): any {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5391959&APPID=df7114577bbb4c778e4b4b5d6e79acf6&units=imperial')
    }
}
