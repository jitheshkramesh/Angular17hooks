import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ProductInterface } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    url: string = 'https://localhost:7251/api/Products';


    getProducts(): Observable<ProductInterface[]> {
        return this.http.get<ProductInterface[]>(this.url)
            .pipe(map((products: ProductInterface[]) => {
                return products.map(product => ({
                    productId: product.productId,
                    productName: `Mob -${product.productName}`,
                    productDescription: product.productDescription,
                    productPrice: product.productPrice,
                    productStock: product.productStock
                }))
            }));
    }
}