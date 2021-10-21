import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    productListSource = new BehaviorSubject<any>(null); // creates the BehaviorSubject

    // You will use this method to store the data
    setProductList(data: any) {
        this.productListSource.next(data)
    }
}