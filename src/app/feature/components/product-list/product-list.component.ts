import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Array<ProductModel>;

  constructor( private productService: ProductService ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
