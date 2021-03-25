import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.css' ]
})
export class DetailsComponent implements OnInit {

  index: number = 0;
  id: string;
  pictures: string[] = [];
  free_shipping: boolean;
  title: string = 'No title';
  seller: string = 'No seller';
  price: number = 0;
  discount_string: string = 'Producto sin descuento';
  thumbnail: string = '';
  available_quantity: number = 0;

  constructor(private productService: ProductService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
    this.getDetails(this.id);
  }

  getDetails(id: string) {
    this.productService.loadDetails(id)
      .subscribe(resp => {
        resp.pictures.map(picture => {
          this.pictures.push(picture.url);
        });
        this.productService.loadSellerNick(resp.seller_id)
          .subscribe(({ seller: { nickname } }) => {
            this.seller = nickname;
          });
        if (resp.original_price !== resp.price && resp.original_price !== null) {
          const diff = resp.original_price - resp.price;
          const discount = (diff / resp.original_price) * 100;
          this.discount_string = `${ discount }% de descuento`;
        }
        this.title = resp.title;
        this.price = resp.price;
        this.available_quantity = resp.available_quantity;
        this.free_shipping = resp.shipping.free_shipping;
        this.thumbnail = resp.thumbnail;
      });
  }

  changeImage(index: number) {
    let newIndex = this.index + index;
    const maxIndex = this.pictures.length;
    if (newIndex >= maxIndex) {
      newIndex -= maxIndex;
    } else if (newIndex < 0) {
      newIndex += maxIndex;
    }
    this.index = newIndex;
  }

  buy() {
    let product = {
      thumbnail: '',
      title: '',
      price: 0
    };
    product.thumbnail = this.thumbnail;
    product.title = this.title;
    product.price = this.price;
    this.productService.cartArray.push(product);
  }

}
