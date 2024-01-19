import { Injectable, signal } from "@angular/core";
import { userInterface } from "src/app/interfaces/login.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    loggedIn: boolean = false;
    currentUserSignal = signal<userInterface | undefined | null>(undefined);

    logIn() {
        this.loggedIn = true;
        console.log('logIn() = ' + this.loggedIn);
    }

    logOut() {
        localStorage.removeItem('token');
        this.currentUserSignal.set(null);
        this.loggedIn = false;
    }

    isAuthenticated() {
        return this.loggedIn;
    }
}