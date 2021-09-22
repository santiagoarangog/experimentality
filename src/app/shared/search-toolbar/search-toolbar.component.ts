import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BestSellerService} from '../../shop/pages/best-seller/best-seller.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.css']
})
export class SearchToolbarComponent implements OnInit {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private bestSellerService: BestSellerService) {
  }

  ngOnInit(): void {
  }

  search(): void {
    const valor = this.txtSearch.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.bestSellerService.get(valor);
    this.txtSearch.nativeElement.value = '';
  }

}
