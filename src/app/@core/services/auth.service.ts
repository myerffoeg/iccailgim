import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export enum AppUserRole {
  guest = 'guest',
  admin = 'admin'
}

export interface AppUser {
  roles: AppUserRole[];
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<AppUser>;

  constructor(
    private matSnackBar: MatSnackBar,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => user ? this.afStore.doc<AppUser>(`users/${user.uid}`).valueChanges() : of(null))
    );
  }

  private updateUserData(user: User): void {
    this.afStore.doc(`users/${user.uid}`).get().subscribe((document: firebase.firestore.DocumentSnapshot<User>) => {
      if (!document.exists) {
        this.afStore.doc(`users/${user.uid}`).set({
          roles: [AppUserRole.guest],
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid,
        }, { merge: true });
      }
    });
  }

  async googleSignInWithPopup(): Promise<void> {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((value: firebase.auth.UserCredential) => {
      if (value) {
        this.updateUserData(value.user);
      }
    }, () => {
      this.matSnackBar.open(`Une erreur est survenue lors de votre connexion.`, '', {
        duration: 7500,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    });
  }

  async signOut(): Promise<void> {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  isAuthenticathed(): Observable<boolean> {
    return this.user$.pipe(
      map(user => !!user)
    );
  }
}
