import { createAction, props } from "@ngrx/store";

const onLogin = '[UserLogin Component] Login Action';

const onLoginSuccess = '[UserLogin Component] Login Success Action';

const onLoginFailure = '[UserLogin Component] Login Failure Action';

const onLoginAction = createAction(onLogin, props<{ userName: String, password: String }>());

const onLoginSuccessAction = createAction(onLoginSuccess, props<{ isSuccess: boolean }>());

const onLoginFailureAction = createAction(onLoginFailure, props<{ isFailure: boolean }>());

export {
    onLogin,
    onLoginSuccess,
    onLoginFailure,
    onLoginAction,
    onLoginSuccessAction,
    onLoginFailureAction
}

