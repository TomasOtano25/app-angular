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
  tasks: Task[];
  title: string;
  constructor(/* */ public taskService: TaskService) { }

  /*Primer metodo que se ejecuta*/
  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      /*console.log(tasks);*/
      this.tasks = tasks;
    });
  }

}
