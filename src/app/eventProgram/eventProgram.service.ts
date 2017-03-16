/**
 * Created by SDS on 2017-03-16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EventProgram } from './eventProgram';
import { Events } from './mock-events';

@Injectable()
export class EventService{

  constructor(private http: Http){ }

  getEvents(): Promise<EventProgram[]> {
    return Promise.resolve(Events);
  }
}
