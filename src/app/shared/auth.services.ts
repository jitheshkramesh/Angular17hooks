import { Injectable, computed, effect, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { userInterface } from "src/app/interfaces/login.interface";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //loggedIn: boolean = false;
    loggedIn = signal<boolean>(false);
    loggedIn$ = new BehaviorSubject<boolean>(false);
    // currentUserSignal = WritableSignal<userInterface | undefined | null>(undefined);
    currentUserSignal = signal<userInterface | undefined | null>(undefined);
    user: userInterface;

    currentUserSignalComputed = computed(() => {
        console.log('Latest currentUserSignalComputed :');

        // this.currentUserSignal()

        if (this.currentUserSignal() == undefined) this.extractInfoJwt();
    });

    currentUserSignalEff = effect(() => {
        console.log('Latest currentUserSignal :' + this.currentUserSignal()?.userName);

        //  if (this.currentUserSignal() == undefined) this.extractInfoJwt();

        console.log('Latest currentUserSignal :' + this.currentUserSignal()?.userName);
        console.log('Latest loggedIn :' + this.loggedIn());
    })

    extractInfoJwt() {
        var myRawToken = localStorage.getItem('token');
        const helper = new JwtHelperService();

        const decodedToken = helper.decodeToken(myRawToken);

        // Other functions
        const expirationDate = helper.getTokenExpirationDate(myRawToken);
        const isExpired = helper.isTokenExpired(myRawToken);

        console.log('Latest decodedToken :' + decodedToken);
        console.log(decodedToken);
        console.log('Latest expirationDate :' + expirationDate);
        console.log('Latest isExpired :' + isExpired);

        let jwtdata = myRawToken.split('.')[1]
        let decodedjwtjsondata = window.atob(jwtdata)
        let decodedjwtdata = JSON.parse(decodedjwtjsondata)
        let usern = decodedjwtjsondata.split(':')[2]
        let userna = usern.split(',')[0]

        let isadmin = decodedjwtdata.admin

        console.log('jwtdata: ' + jwtdata)
        console.log('decodedjwtjsondata: ' + decodedjwtjsondata)
        console.log('decodedjwtdata: ' + decodedjwtdata)
        console.log('is admin: ' + isadmin)

        console.log('is user name : ' + userna)
        this.user = { userName: userna };

        this.currentUserSignal.set(this.user);
    }

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