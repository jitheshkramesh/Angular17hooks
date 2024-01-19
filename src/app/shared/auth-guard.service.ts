import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, filter, map } from "rxjs";
import { CurrentUserService } from "src/app/services/currentUser.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private route:Router,private currentUserService:CurrentUserService){}

    // canActivate():  Observable<boolean> {
    //     return this.currentUserService.currentUser$.pipe(
    //         filter((currentUser)=>currentUser !== undefined),
    //         map((currentUser)=>{
    //             if(!currentUser){
    //                 this.route.navigateByUrl('/');
    //                 return false;
    //             }
    //             return true;
    //         })
    //     )
    // }
    
    canActivate(): boolean {
        if (localStorage.getItem('token')) return true;
        return false;
    }

}