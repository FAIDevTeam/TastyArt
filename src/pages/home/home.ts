import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavController, NavParams, ViewController  } from 'ionic-angular';

import { EventService } from '../../app/eventProgram/eventProgram.service';

import { FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  //programList: EventProgram[];
  programList: FirebaseListObservable<any>;
  selectTab: string = "onGoing";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventService: EventService,
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getEvents(selectedTab): void{
    this.programList = this.eventService.getEvents(selectedTab) ;
  }

  ngOnInit(): void{
    this.getEvents(this.selectTab);
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Description
        </ion-title>
        <ion-buttons start>
          <button ion-button (click)="dismiss()">
            <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-slides pager>
        <ion-slide *ngFor="let eventImg of eventDetail.imgList">
          <img [src]="eventImg" class="slide-image"/>
          <h2 class="slide-title" [innerHTML]="eventDetail.title"></h2>
          <p [innerHTML]="eventDetail.description"></p>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class ModalContentPage {

  eventDetail;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.eventDetail = this.params.get('eventObj');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
