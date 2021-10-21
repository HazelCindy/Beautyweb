import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = [];

  constructor(private _product: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this._product.productListSource.subscribe(data => {
      // do stuff here
      this.products = data
      console.log(data)
    })
  }
}
