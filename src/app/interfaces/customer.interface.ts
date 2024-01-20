export interface ICustomer {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    city: string,
    state: string,
    
    zipcode: string,
    country: string,
    phone: string,
    birthDate: Date,
    gender:string,

    createdDate?: Date,
    createdId?: number,
    updatedId?: number,
    updatedDate?: Date,


}