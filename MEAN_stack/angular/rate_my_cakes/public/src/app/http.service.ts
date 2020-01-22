import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getCakes() {
    return this._http.get('/cakes');
  }
  addCake(cakeObject) {
    return this._http.post('/cakes', cakeObject);
  }  
  findCake(cakeID) {
    return this._http.get('/cakes/' + cakeID);
  }  
  deleteCake(cakeID) {
    return this._http.delete('/cakes/' + cakeID);
  }
  updateCake(cakeID, cakeObject) {
    return this._http.put('/cakes/' + cakeID, cakeObject);
  }

  addComment(commentObject) {
    return this._http.post('/comments', commentObject);
  }  
}
