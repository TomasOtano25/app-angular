import { Injectable } from '@angular/core';

/* */
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AuthService {

  /*private user: Observable<firebase.User>;*/

  constructor(private afAuth: AngularFireAuth, private af: AngularFirestore) {
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Me permite tener acceso a los contactos de los clientes
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    this.afAuth.auth.signInWithPopup(provider);
  }

  loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider);
  }

  /*loginTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider);
  }*/

  signon(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error => {
        console.log(`${error.code} ${error.message}`);
      }));
  }


  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(`${error.code} ${error.message}`);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  authState(): any {
    return this.afAuth.authState;
  }

}
