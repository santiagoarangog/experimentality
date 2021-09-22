import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BestSellerInterface} from '../best-seller/best-seller.interface';
import {BestSellerService} from '../best-seller/best-seller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = '';
  products: BestSellerInterface[] = [];
  limit: number = 20;
  typeError: string = "empty-cart";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bestSellerService: BestSellerService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.search = params.id;
        this.bestSellerService.get(params.id, this.limit)
          .subscribe((result: BestSellerInterface[]) => {
            this.products = result;
          });
      }
    });
  }

}
