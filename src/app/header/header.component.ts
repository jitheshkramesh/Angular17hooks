import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.services';
import { subscribeService } from '../services/subscribe.services';
import { NotificationService } from '../services/notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  private number: number = 123345456;
  secondValue: number = 126;
  numbers: number[] = [];
  authenticated: boolean = false;
  authService = inject(AuthService);
  message: string;
  userName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private subservice: subscribeService,
    private notification: NotificationService,
    private toastr: ToastrService
  ) {


  }

  ngOnInit(): void {
    //this.authenticated = this.authService.isAuthenticated(); 


    this.notification.notificationSubject.subscribe((d) => {
      if (Number(d) > 0) {
        localStorage.setItem('ccount', d);
        this.message = 'C-Count : ' + d;
      }
    });


    this.authService.loggedIn$.subscribe(c => {
      this.authenticated = c; 
    });
 

    this.userName = this.authService.currentUserSignal() ? this.authService.currentUserSignal()?.userName : localStorage.getItem('userName')
    if (this.authService.currentUserSignal()) {
      this.userName = this.authService.currentUserSignal()?.userName;

    }
    else {
      this.userName = localStorage.getItem('userName');
      this.message = 'C-Count : ' + localStorage.getItem('ccount');
    }
    console.log('username changed : ' + this.userName);
  }


  login() {
    // this.authService.logIn();
    // this.authenticated = this.authService.isAuthenticated();
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.logOut();
    this.authenticated = this.authService.isAuthenticated();
    this.toastr.info('Logout successfully', 'Home');
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
