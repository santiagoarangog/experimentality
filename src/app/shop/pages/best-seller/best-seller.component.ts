import {Component, OnInit} from '@angular/core';
import {BestSellerService} from './best-seller.service';
import {Observable} from 'rxjs';
import {BestSellerInterface} from './best-seller.interface';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {


  constructor(private bestSellerService: BestSellerService) {
  }

  ngOnInit(): void {
  }

}
