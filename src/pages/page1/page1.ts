import { Component } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  user: string;
  constructor(public navCtrl: NavController, public af: AngularFire, private _auth: AuthService) {

  }

  ngOnInit() {
    this.user = this._auth.email();
  }

  facebook(): void {
    this._auth.signInWithFacebook().then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    this.user = this._auth.email();
  }

  logout(): void{
    this._auth.signOut();
  }

  google(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }
}
