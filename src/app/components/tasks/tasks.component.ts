import { Component, OnInit } from '@angular/core';

/* */
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { log } from 'util';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  /* */
  tasks: Task[];
  title: string;

  editState: Boolean = false;
  taskToEdit: Task;

  constructor(/* */ public taskService: TaskService) { }

  /*Primer metodo que se ejecuta*/
  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      /*console.log(tasks);*/
      this.tasks = tasks;
    });
  }

  deleteTask(event, task) {
    const response = confirm('are you sure you want delete?');
    if (response === true) {
      this.taskService.deleteTask(task);
    }
    return;
  }

  editTask(event, task) {
    this.editState = !this.editState;
    this.taskToEdit = task;
  }

  updateTask(task) {
    this.taskService.updateTask(task);
    this.taskToEdit = null;
    this.editState = false;
  }
}
