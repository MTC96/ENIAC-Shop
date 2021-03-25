import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  public totalResults: number = 0;
  public products: Product[] = [];
  public offset: number = 0;
  public page: number = Math.floor(this.offset / 20 + 1);


  constructor(public productService: ProductService) { }

  query: string = this.productService.query;
  querySubs: Subscription;

  ngOnInit(): void {
    if (this.query == '') {
      this.query = 'Carros';
    }
    this.loadProductsBySearch(this.query);
    this.observeQuery();
  }

  ngOnDestroy(): void {
    this.querySubs.unsubscribe();
  }

  observeQuery() {
    const obs$ = new Observable<string>(observer => {
      setInterval(() => {
        observer.next(this.productService.query);
      }, 100);
    });
    this.querySubs = obs$.subscribe(resp => {
      if (resp != this.query && resp.length != 0) {
        this.query = resp;
        this.loadProductsBySearch(this.query);
      }
    });
  }

  loadProductsBySearch(q: string, offset: number = 0) {
    this.offset = offset;
    this.page = Math.floor(this.offset / 20 + 1);
    this.productService.loadProductsBySearch(q, this.offset)
      .subscribe(({ paging: { total }, results }) => {
        this.totalResults = total;
        results.map(product => {
          product.thumbnail = product.thumbnail.replace('-I.', '-V.');
          this.productService.loadSellerNick(product.seller.id)
            .subscribe(({ seller: { nickname } }) => {
              product.seller_nick = nickname;
            });
        });
        this.products = results;
      });
  }

}
