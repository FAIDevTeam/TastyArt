import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventProgram } from '../../app/eventProgram/eventProgram';
import { EventService } from '../../app/eventProgram/eventProgram.service';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventService: EventService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getEvents(selectedTab): void{
    this.programList = this.eventService.getEvents(selectedTab) ;
  }

  ngOnInit(): void{
    this.getEvents(this.selectTab);
  }

}
