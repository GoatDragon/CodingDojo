import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'restful tasks';
  tasks: any = [];
  newTask: any;
  editTask: any = false;
  selectedTask: any = false;

  constructor(private _httpService: HttpService) {};

  ngOnInit() {
    this.newTask = {title: "", description: ""};
  };

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe( data => { this.tasks = data });
  };
  getTaskDetails(id) {
    let observable = this._httpService.findTask(id);
    observable.subscribe( data => { console.log(data) });
  };
  onSubmit(params) {
    this._httpService.addTask(this.newTask)
        .subscribe( data => {
            this.newTask = {title: "", description: ""}
            this.getTasksFromService()
        });
  };
  deleteTask(taskID) {
    this._httpService.deleteTask(taskID)
        .subscribe( data => { this.getTasksFromService() });
  };
  updateTask(taskID) {
    if (this.editTask === false) {
        this._httpService.findTask(taskID)
            .subscribe( data => { this.editTask = data });
    } else {
        this._httpService.updateTask(taskID, this.editTask)
            .subscribe( data => {
                this.editTask = false;
                this.getTasksFromService();
            });
    };
  };
  showTask(inputTask) {
    this.selectedTask = inputTask
  };
};
