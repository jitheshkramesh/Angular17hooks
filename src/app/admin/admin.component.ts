import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../services/user.service'; 
import { USER_TOKEN } from '../app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'] 
})
export class AdminComponent {
  userService = inject(USER_TOKEN);
  // constructor(@Inject(USER_TOKEN) private userService: UserService) { 

  //   }
  
    name: string = '';
    gender: string = 'Male';
    subType: string = 'Yearly';
    status: string = 'Active';
  
    CreateNewUser(){
      this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
    } 
}
