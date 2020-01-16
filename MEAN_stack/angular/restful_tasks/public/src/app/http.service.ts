import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.addTask({'title': 'this is an added task', 'description': 'it has been added'});
    // this.updateTask('5e20b697657f7311a91afa9a', {'completed': true})
    this.getTasks();

  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
  addTask(taskObject) {
    let tempObservable = this._http.post('/tasks', taskObject);
    tempObservable.subscribe(data => console.log('task added', data));
  }  
  findTask(taskID) {
    let tempObservable = this._http.get('/tasks/' + taskID);
    tempObservable.subscribe(data => console.log('task found', data));
  }  
  deleteTask(taskID) {
    let tempObservable = this._http.delete('/tasks/' + taskID);
    tempObservable.subscribe(data => console.log('task deleted', data));
  }
  updateTask(taskID, taskObject) {
    let tempObservable = this._http.put('/tasks/' + taskID, taskObject);
    tempObservable.subscribe(data => console.log('task updated', data));
  }
}
