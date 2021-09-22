import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslocoRootModule} from '../transloco-root.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import {RouterModule} from '@angular/router';
import { CardProductsComponent } from './card-products/card-products.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';


@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SearchToolbarComponent,
    CardProductsComponent,
    ScrollTopComponent,
    NavbarMobileComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        SearchToolbarComponent,
        CardProductsComponent,
        ErrorPageComponent
    ],
  imports: [
    CommonModule,
    TranslocoRootModule,
    RouterModule,
  ]
})
export class SharedModule {
}
