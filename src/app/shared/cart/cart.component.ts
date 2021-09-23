import {Component, OnInit} from '@angular/core';
import {CardProductsService} from '../card-products/card-products.service';
import {CardProductsInterface} from '../card-products/card-products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allProducts: CardProductsInterface[] = [];

  constructor(private cardProductsService: CardProductsService) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.allProducts = this.cardProductsService.productsOfCart;
  }

}
