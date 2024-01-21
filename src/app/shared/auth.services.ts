import { Injectable, effect, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { userInterface } from "src/app/interfaces/login.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //loggedIn: boolean = false;
    loggedIn = signal<boolean>(false);
    loggedIn$ = new BehaviorSubject<boolean>(false);
    currentUserSignal = signal<userInterface | undefined | null>(undefined);

    currentUserSignalEff = effect(() => {
        console.log('Latest currentUserSignal :' + this.currentUserSignal().userName);
        console.log('Latest loggedIn :' + this.loggedIn());
    })

    logIn() {
        this.loggedIn$.next(true);
        this.loggedIn.update(t => true);
        console.log('logIn() = ' + this.loggedIn$);
    }

    logOut() {
        localStorage.removeItem('token');
        this.currentUserSignal.set(null);
        this.loggedIn.update(t => false);
        this.loggedIn$.next(false);
    }

    isAuthenticated() {
        //return this.loggedIn();
        let val;
        this.loggedIn$.subscribe(c => {
            //this.loggedIn = c;
            this.loggedIn.set(c);
            console.log('isAuthenticated : ' + this.loggedIn());

            console.log('isAuthenticated 2 : ' + this.loggedIn());
        });
        return this.loggedIn();
    }
}