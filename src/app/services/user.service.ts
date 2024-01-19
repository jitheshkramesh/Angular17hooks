import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../models/user";
import { LoggerService } from "./logger.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"; 

@Injectable()
export class UserService {
    constructor(private logService: LoggerService, private http: HttpClient) { }

    users: User[] = [
        new User('Steve Smith', 'Male', 'Monthly', 'Active'),
        new User('Mery Jane', 'Female', 'Yearly', 'Inactive'),
        new User('Mark Tyler', 'Male', 'Quaterly', 'Active')
    ];

    GetAllUsers() {
        return this.users;
    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User) {
        this.OnUserDetailsClicked.emit(user);
    }

    CreateUser(name: string, gender: string, subType: string, status: string) {
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        this.logService.LogMessage(name, status);
    }

}