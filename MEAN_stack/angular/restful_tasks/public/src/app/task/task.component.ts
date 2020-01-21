import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input() taskToShow: any;

  constructor() { }

  ngOnInit() {
  }

  showTask(task) {
    console.log('task component:', task)
  }

}
