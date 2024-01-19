import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { registerInterface } from "../interfaces/login.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationServices {

    baseUrl = 'https://localhost:7251/api';
    apiUrl = this.baseUrl + '/Authentication/RegisterAdmin';
    logUrl = this.baseUrl + '/Authentication/Login';

    constructor(private http: HttpClient) { }

    userRegister(inputData: any) {
        return this.http.post(this.apiUrl, inputData);
    }

    userLogin(inputData: any) {
        return this.http.post(this.logUrl, inputData);
    }

}