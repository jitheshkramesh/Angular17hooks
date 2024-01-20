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

    customerUpdate(inputData: any) {
        return this.http.put(this.apiUrl, inputData);
    }

    getCustomerById(id: number): Observable<ICustomer> {
        return this.http.get<ICustomer>(this.apiUrl + '/' + id)
        .pipe(map((cust: ICustomer) => ({
                id: cust.id,
                firstName: cust.firstName,
                gender: (cust.gender == 'm') ? 'm' : (cust.gender == 'f') ? 'f' : 'n',
                lastName: cust.lastName,
                birthDate: new Date(cust.birthDate),
                country: cust.country,
                state: cust.state,
                zipcode: cust.zipcode,
                phone: cust.phone,
                email: cust.email,
                city: cust.city,
        }))
        );
    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.apiUrl)
            .pipe(map((customer: ICustomer[]) => {
                return customer.map(cust => ({
                    id: cust.id,
                    firstName: cust.firstName,
                    gender: cust.gender, // (cust.gender == 'm') ? 'Male' : (cust.gender == 'f') ? 'Female' : 'Not Specified',
                    lastName: cust.lastName,
                    birthDate: cust.birthDate,
                    country: cust.country,
                    state: cust.state,
                    zipcode: cust.zipcode,
                    phone: cust.phone,
                    email: cust.email,
                    city: cust.city,
                }))
            }));
    }
}