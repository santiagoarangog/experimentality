import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslocoRootModule} from '../transloco-root.module';


@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslocoRootModule,
  ]
})
export class SharedModule {
}
