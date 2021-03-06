import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  addedProducts: Array<ProductModel>;

  constructor( private cartService: CartService ) {}

  ngOnInit() {
    this.addedProducts = this.cartService.getAddedProducts();
  }

  removeProduct(addedProduct) {
    this.cartService.removeProduct(addedProduct);
  }
}
