/**
 * Created by SDS on 2017-03-16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EventProgram } from './eventProgram';
import { Events, ScheduledEvents } from './mock-events';

@Injectable()
export class EventService{

  constructor(private http: Http){ }

  getEvents(selectedTab): Promise<EventProgram[]> {

    if(selectedTab === 'onGoing') return Promise.resolve(Events);
    else return Promise.resolve(ScheduledEvents);

  }
}
