import { createReducer, on } from '@ngrx/store';

import { onLoginAction, onLoginFailureAction, onLoginSuccessAction } from '../actions';

interface initialAuthState {
    userName: string;
    password: string;
    isSuccess: boolean;
    isFailure: boolean;
}

const initialState: initialAuthState = {
    userName: '',
    password: '',
    isSuccess: false,
    isFailure: false
}
const authReducer = createReducer<initialAuthState>(
    initialState,
    on(onLoginAction, (state) => {
        return { ...state, };
    }), 
    on(onLoginSuccessAction, (state, action) => {
        return {
            ...state,
            isSuccess: action.isSuccess,
            isFailure: false
        }
    }),
    on(onLoginFailureAction, (state, action) => {
        return {
            ...state,
            isSuccess: false,
            isFailure: action.isFailure
        };
    })
);

export default authReducer;