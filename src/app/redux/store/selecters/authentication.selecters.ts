import { createSelector } from '@ngrx/store';


interface loginAuthState {
    userName: string;
    password: string;
    isSuccess: boolean;
    isFailure: boolean;
}

export interface loginState {
    loginStore: loginAuthState
}

// const isSuccess = (state: loginAuthState) => state.isSuccess;
// const isError = (state: loginAuthState) => state.isFailure;

const store = (state: loginState) => state.loginStore;

const isSuccessSelector = createSelector(store, (s) => s.isSuccess);
const isErrorSelector = createSelector(store, (s) => s.isFailure);

export { isSuccessSelector, isErrorSelector }