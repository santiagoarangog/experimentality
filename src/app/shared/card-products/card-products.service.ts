import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CardProductsInterface} from './card-products.interface';

@Injectable({
  providedIn: 'root'
})
export class CardProductsService {

  public _products: CardProductsInterface[] = [];

  constructor(private http: HttpClient,
              private _router: Router) {
    this._products = JSON.parse(localStorage.getItem('products')!) || [];
  }

  get productsOfCart() {
    return [...this._products];
  }

  addProduct(productsList: CardProductsInterface[]): void {
    localStorage.setItem('products', JSON.stringify(productsList));
  }
}
