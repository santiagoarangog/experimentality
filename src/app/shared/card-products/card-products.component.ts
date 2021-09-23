import {Component, Input, OnInit} from '@angular/core';
import {BestSellerInterface} from '../../shop/pages/best-seller/best-seller.interface';
import {CardProductsService} from './card-products.service';
import {CardProductsInterface} from './card-products.interface';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit {

  @Input() products: BestSellerInterface[] = [];
  productsList: CardProductsInterface[] = [];

  constructor(private cardProductsService: CardProductsService) {
  }

  ngOnInit(): void {
    console.log(this.cardProductsService.productsOfCart);
  }

  addProduct(thumbnail: string, title: string, price: number, quantity: number = 1): void {
    this.productsList = [{
      thumbnail: thumbnail,
      title: title,
      price: price,
      quantity: quantity
    }];
    this.cardProductsService.addProduct(this.productsList);
  }

}
