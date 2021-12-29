import { Injectable } from '@angular/core';
import { getAuth, signInAnonymously } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth = getAuth();

  newAnonymous(): void {
    signInAnonymously(this._auth)
      .then(result => localStorage.setItem('uid', result.user.uid))
      .catch((error) => console.log(error));
  }

  hasUser(): boolean {
    return this.user != null;
  }

  get user() {
    return this._auth.currentUser
  }
}
