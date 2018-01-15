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

  constructor() { }

}
