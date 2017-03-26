
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

import 'rxjs/add/operator/toPromise';

import { EventProgram } from './eventProgram';
import { Events, ScheduledEvents } from './mock-events';

@Injectable()
export class EventService{

  //EventsByFirebase: FirebaseListObservable<EventProgram[]>;

  constructor(private http: Http, public af:AngularFire){}

  getEvents(selectedTab): FirebaseListObservable<any> {

    //if(selectedTab === 'onGoing') return Promise.resolve(Events);
    if(selectedTab === 'onGoing') return this.af.database.list('/eventTable');
    else ScheduledEvents;
  }
}
