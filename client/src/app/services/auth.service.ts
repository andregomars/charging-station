import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from './../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
   this.initUserStream();
  }

  initUserStream() {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return this.user = of(null);
        }
      })
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>(`users`).valueChanges();
  }


  signUp(email: string, username: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.setUserDoc(userCredential, username);
        this.initUserStream();
        this.router.navigate(['/main']);
      }).catch(err => {
        console.error(err);
      });
  }

  private setUserDoc(userCredential: firebase.auth.UserCredential, username: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${userCredential.user.uid}`);

    const data: User = {
      uid: userCredential.user.uid,
      name: username,
      email: userCredential.user.email || null,
      roles: { viewer: true }
    };

    return userRef.set(data);
  }

  signIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.initUserStream();
        this.router.navigate(['/main']);
      }).catch(err => {
        console.error(err);
      });
  }

  signOut() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

  canRead(user: User): boolean {
    const allowed = ['admin', 'viewer'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) {
      return false;
    }

    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true;
      }
    }
    return false;
  }
}

