import { Injectable } from '@angular/core';

import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../models/user';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(public afs: AngularFirestore) { }

}
