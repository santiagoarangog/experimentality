import {Component, OnInit} from '@angular/core';
import {BestSellerService} from '../../shop/pages/best-seller/best-seller.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  history: string[] = [];

  constructor(private bestSellerService: BestSellerService) {
  }

  ngOnInit(): void {
    this.history = this.bestSellerService.history;
    console.log(this.history);
  }

  searchLimit(numLimit: number): void {
    console.log(numLimit);
  }

  search(item: string): void {
  }
}
