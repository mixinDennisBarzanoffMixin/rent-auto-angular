import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {first, shareReplay, switchMap} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user$: Observable<User>;

    constructor(private db: AngularFirestore,
                private router: Router,
                private afAuth: AngularFireAuth) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    console.log('logged in');
                    return this.db.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            }),
            shareReplay(1)
        );
    }

    async googleSignin() {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      return this.updateUserData(credential.user);
    }

    private updateUserData(user) {
        // Sets user data in firestore on login
        console.log(user);
        const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);
        const customUserData = {
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            email: user.email,
        };
        // console.log('hello');
        return userRef.set(customUserData, {merge: true});
    }

    async signOut() {
        await this.afAuth.auth.signOut();
        return this.router.navigate(['/']);
    }
}