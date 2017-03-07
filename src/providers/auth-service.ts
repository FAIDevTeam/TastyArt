import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {FirebaseAuthState, AngularFireAuth, AuthProviders, AuthMethods} from "angularfire2";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState>{
    return this.auth$.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect
    });
  }

  signOut(): void{
    this.auth$.logout();
  }

  email(): string {
    if(this.authState != null){
      return this.authState.facebook.email;
    }
    return '';
  }

}
