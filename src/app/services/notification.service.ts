import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //public notificationSubject = new Subject<string>();
  notificationSubject = new BehaviorSubject<string>('0');

  constructor() { }

  sendNotification(data) {
    this.notificationSubject.next(data);
  }
}
