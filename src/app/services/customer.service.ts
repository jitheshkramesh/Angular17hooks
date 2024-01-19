import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class customerService{
    constructor(private http: HttpClient) { }

    apiUrl: string = 'https://localhost:7251/api/Customer';

    customerCreation(inputData: any) {
        return this.http.post(this.apiUrl, inputData);
    }
}