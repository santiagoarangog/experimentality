import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslocoRootModule} from '../transloco-root.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    TranslocoRootModule,
  ]
})
export class SharedModule {
}
