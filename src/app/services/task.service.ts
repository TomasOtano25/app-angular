import { Injectable } from '@angular/core';

/* */
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';

import { Task } from '../models/task';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  /* */
  taskCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs: AngularFirestore) {
    /* */
    this.taskCollection = this.afs.collection('tasks');

    /*this.tasks = this.taskCollection.valueChanges();*/
    this.tasks = this.taskCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getTasks() {
     return this.tasks;
   }

   addTask(task: Task) {
     this.taskCollection.add(task);
   }

   deleteTask(task: Task) {
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    this.taskDoc.delete();
   }

}
