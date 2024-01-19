import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from 'src/app/shared/candeactivate-guard.service';
import { subscribeService } from '../services/subscribe.services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, IDeactivateComponent {

  firstName: string | undefined;
  lastName: string | undefined;
  country: string | undefined;
  subject: string | undefined;

  constructor(private subservice: subscribeService) {

  }

  ngOnInit(): void {
  }

  canExit() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm('You have unsaved changes.Do you really want discard this changes?');
    }
    else {
      return true;
    }
  }

  subscribe() {
    this.subservice.onSubscribeClicked('Weekly');
  }

}
