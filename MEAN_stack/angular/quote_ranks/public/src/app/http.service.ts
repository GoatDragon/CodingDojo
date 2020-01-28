import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient){}
    getAuthors(): any {
      return this._http.get('/authors');
    }
    addAuthor(authorObject): any {
      return this._http.post('/authors', authorObject);
    }  
    findAuthor(authorID): any {
      return this._http.get('/authors/' + authorID);
    }  
    deleteAuthor(authorID): any {
      return this._http.delete('/authors/' + authorID);
    }
    updateAuthor(authorID, authorObject): any {
      return this._http.put('/authors/' + authorID, authorObject);
    }
    addQuote(authorID, quoteObject): any {
      return this._http.put('/quotes/' + authorID, quoteObject);
    }
    deleteQuote(authorID, quoteObject): any {
      return this._http.put('/removequotes/' + authorID, quoteObject);
    }
    upVote(info): any {
      return this._http.put('/upvotequote/', info);
    }
    downVote(info): any {
      return this._http.put('/downvotequote/', info);
    }
}

