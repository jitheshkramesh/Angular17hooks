import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { ICustomer } from "../interfaces/customer.interface";

@Injectable({
    providedIn: 'root'
})
export class customerService {
    constructor(private http: HttpClient) { }

    apiUrl: string = 'https://localhost:7251/api/Customer';

    customerCreation(inputData: any) {
        return this.http.post(this.apiUrl, inputData);
    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.apiUrl)
            .pipe(map((products: ICustomer[]) => {
                return products.map(cust => ({
                    id: cust.id,
                    firstName: cust.firstName,
                    gender: cust.gender, // (cust.gender == 'm') ? 'Male' : (cust.gender == 'f') ? 'Female' : 'Not Specified',
                    lastName: cust.lastName,
                    birthDate: cust.birthDate,
                    country: cust.country,
                    state:cust.state,
                    zipcode:cust.zipcode,
                    phone:cust.phone,
                    email:cust.email,
                    city:cust.city,
                }))
            }));
    }
}