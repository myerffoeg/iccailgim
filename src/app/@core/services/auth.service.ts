import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, take, map } from 'rxjs/operators';

export enum AppUserRole {
  guest = 'guest',
  admin = 'admin'
}

interface AppUser {
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
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => user ? this.afs.doc<AppUser>(`users/${user.uid}`).valueChanges() : of(null))
    );
  }

  async googleSignin() {
    const credential = await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    return this.updateUserData(credential.user);
  }

  private updateUserData(user: User): Promise<void> {
    return this.afs.doc(`users/${user.uid}`).set({
      roles: [AppUserRole.guest],
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId: user.providerId,
      uid: user.uid,
    }, { merge: true });
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  isAuthenticathed(): Observable<boolean> {
    return this.user$.pipe(
      take(1),
      map(user => !!user)
    );
  }
}
