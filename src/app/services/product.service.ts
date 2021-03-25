import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { LoadProducts } from '../interfaces/load-products.interface';
import { LoadSeller } from '../interfaces/load-seller.interface';
import { LoadDetails } from '../interfaces/load-details.interface';

const url_base = environment.url_base;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  query: string = 'Carros';
  cartArray: any[] = [];

  constructor(private http: HttpClient) { }

  loadProductsBySearch(q: string, offset: number = 0) {
    const url = `${ url_base }/sites/MCO/search?q=${ q }&limit=20&offset=${ offset }`;
    return this.http.get<LoadProducts>(url);
  }

  loadSellerNick(seller_id: number) {
    const url = `${ url_base }/sites/MCO/search?seller_id=${ seller_id }`;
    return this.http.get<LoadSeller>(url);
  }

  loadDetails(item_id: string) {
    const url = `${ url_base }/items/${ item_id }?include_attributes=all`;
    return this.http.get<LoadDetails>(url);
  }
}
