import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.css' ]
})
export class ShoppingCartComponent implements OnInit {

  
  constructor(protected productService: ProductService) { }
  
  products: any[] = this.productService.cartArray;
  total: number = 0;

  ngOnInit(): void {
    this.products.forEach(product => {
      this.total += product.price;
    });
  }

  buy() {
    this.productService.cartArray = [];
    this.products = [];
    this.total = 0;
  }

}
