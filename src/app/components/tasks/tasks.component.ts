import { Component, OnInit } from '@angular/core';

/* */
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  /* */
  task: Task[];
  constructor(/* */ public taskService: TaskService) { }

  /*Primer metodo que se ejecuta*/
  ngOnInit() {
  }

}
