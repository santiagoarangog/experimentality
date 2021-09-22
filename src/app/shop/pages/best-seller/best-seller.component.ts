import {Component, OnInit} from '@angular/core';
import {BestSellerService} from './best-seller.service';
import {BestSellerInterface} from './best-seller.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {

  products$: BestSellerInterface[] = [];

  constructor(private bestSellerService: BestSellerService) {
  }

  ngOnInit(): void {
    this.bestSellerService.get('moda')
      .subscribe((resp: BestSellerInterface[]) => {
        console.log(resp);
        this.products$ = resp;
      })
  }

}
