import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token: any;
  authenticated: boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    //this.authenticated = this.authService.isAuthenticated();

    this.authService.loggedIn$.subscribe(c=> {
      this.authenticated = c;
      console.log('isAuthenticated : ' + this.authenticated);
   });

    //this.authenticated = this.authService.isAuthenticated();
    //console.log('token : ' +localStorage.getItem('token'));
    console.log('HeaderComponent ngOnInit : authenticated : ' + this.authenticated);
    
    //console.log('token : ' + this.token);
    console.log('authenticated : ' + this.authenticated);
  }

}
