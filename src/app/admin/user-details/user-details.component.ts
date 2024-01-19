import { Component, OnInit, inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  selectedUser: User;
  userService = inject(USER_TOKEN);

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
    })
  }
}
