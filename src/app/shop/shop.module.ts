import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {ShopRoutingModule} from './shop-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CarouselComponent} from './pages/carousel/carousel.component';
import { BestSellerComponent } from './pages/best-seller/best-seller.component';
import {TranslocoRootModule} from '../transloco-root.module';
import { SearchComponent } from './pages/search/search.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    BestSellerComponent,
    SearchComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    TranslocoRootModule
  ]
})
export class ShopModule {
}
