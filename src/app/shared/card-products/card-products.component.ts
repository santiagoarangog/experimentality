import {Component, Input, OnInit} from '@angular/core';
import {BestSellerInterface} from '../../shop/pages/best-seller/best-seller.interface';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit {

  @Input() products: BestSellerInterface[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
