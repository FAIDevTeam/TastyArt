import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

import {EventService } from './eventProgram/eventProgram.service';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { SearchPage } from '../pages/test-page/test-page';

import { HomePage, ModalContentPage } from '../pages/home/home';

const fireBaseConfig = {
  apiKey: "AIzaSyAgycg66M1r1q1iIWNVilEB5fW0ohsRkjk",
  authDomain: "tastyart-aa641.firebaseapp.com",
  databaseURL: "https://tastyart-aa641.firebaseio.com",
  storageBucket: "tastyart-aa641.appspot.com",
  messagingSenderId: "1089029154751"
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    SearchPage,
    ModalContentPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    SearchPage,
    ModalContentPage
  ],
  providers: [AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}, EventService]
})
export class AppModule {}
