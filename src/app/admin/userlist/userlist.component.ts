import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'] 
})
export class UserlistComponent {

  constructor(@Inject(USER_TOKEN) private userService: UserService) { }

  userList = this.userService.GetAllUsers();

  ShowUserDetails(user: User) {
    this.userService.OnShowUserDetails(user);
  }
}
