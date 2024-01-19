import { Component, OnInit } from '@angular/core';
import { subscribeService } from '../services/subscribe.services';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private subservice: subscribeService) {

  }

   

  subscribe() {
    this.subservice.onSubscribeClicked('Yearly');
  }

  

}
