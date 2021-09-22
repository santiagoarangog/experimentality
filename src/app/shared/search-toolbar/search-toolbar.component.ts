import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BestSellerService} from '../../shop/pages/best-seller/best-seller.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.css']
})
export class SearchToolbarComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  valueSearch: string = '';

  constructor(private bestSellerService: BestSellerService,
              private _router: Router) {
  }

  ngOnInit(): void {
  }

  search(): void {
    this.valueSearch = this.txtSearch.nativeElement.value;
    if (this.valueSearch.trim().length === 0) {
      return;
    }
    this.bestSellerService.search(this.valueSearch);
    this.txtSearch.nativeElement.value = this.valueSearch;
  }

}
