import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks() {
    return this._http.get('/tasks');
  }
  addTask(taskObject) {
    return this._http.post('/tasks', taskObject);
  }  
  findTask(taskID) {
    return this._http.get('/tasks/' + taskID);
  }  
  deleteTask(taskID) {
    return this._http.delete('/tasks/' + taskID);
  }
  updateTask(taskID, taskObject) {
    return this._http.put('/tasks/' + taskID, taskObject);
  }
}
