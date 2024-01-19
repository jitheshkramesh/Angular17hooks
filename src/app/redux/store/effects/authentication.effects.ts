import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { onLogin, onLoginFailureAction, onLoginSuccessAction } from '../actions';
import { EMPTY, catchError, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { loginState } from '../selecters';

@Injectable()
export default class AuthenticationEffects {

    // public onLoginEffect = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             ofType(onLogin),
    //             tap((state) => {
    //                 //console.log(state);
    //                 const { username, password } = state;
    //                 if (username === "Admin@test.com" && password === "123456")
    //                     this.store.dispatch(onLoginSuccessAction({ isSuccess: true }));
    //                 else
    //                     this.store.dispatch(onLoginFailureAction({ isError: true }));

    //             })), { dispatch: false }
    // );

    public onLoginEffect = createEffect(
        () =>
            this.actions$.pipe(
                ofType(onLogin),
                map((state) => {
                    //console.log(state);
                    const { username, password } = state;
                    if (username === "Admin@test.com" && password === "123456")
                        return (onLoginSuccessAction({ isSuccess: true }));
                    else
                    return (onLoginFailureAction({ isFailure: true }));

                }),
                catchError((err) => EMPTY)
            ), { dispatch: false })
        ;


    constructor(private actions$: Actions) { }

    // constructor(private actions$: Actions, private store: Store<loginState>) { }

}