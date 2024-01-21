import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.services';
import { subscribeService } from '../services/subscribe.services';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private number: number = 123345456;
  secondValue: number = 126;
  numbers: number[] = [];
  authenticated: boolean = false;
  authService = inject(AuthService);
  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private subservice: subscribeService,
    private notification: NotificationService
    ) {
  }

  ngOnInit(): void {
    //this.authenticated = this.authService.isAuthenticated();
    console.log('Header ngOnInit() = ' + this.authenticated);
    console.log('Header currentUserSignal = ' + this.authService.currentUserSignal());
    this.notification.notificationSubject.subscribe(d=>{
      this.message = 'C-Count : ' + d;
    });
 
    this.authService.loggedIn$.subscribe(c=> {
      this.authenticated = c;
      console.log('isAuthenticated : ' + this.authenticated);
   });

    //this.authenticated = this.authService.isAuthenticated();
    console.log('token : ' +localStorage.getItem('token'));
    console.log('HeaderComponent ngOnInit : authenticated : ' + this.authenticated);

  }

  login() {
    // this.authService.logIn();
    // this.authenticated = this.authService.isAuthenticated();
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.logOut();
    this.authenticated = this.authService.isAuthenticated();
    this.router.navigate(['login']);
  }

  get counter() {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  add() {
    this.numbers.push(1);
  }

  subscribe() {
    this.subservice.onSubscribeClicked('Monthly');
  }

}
