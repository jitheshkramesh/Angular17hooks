import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CurrentUserService {
    // currentUser$ = new Subject<{ id: string; name: string }> | null | undefined > (undefined);

    // setCurrentUser() {
    //     if (localStorage.getItem('token')) {
    //         this.currentUser$.next({ id: '1', name: 'foo' });
    //     } else {
    //         this.currentUser$.next(null);
    //     }
    // }
}