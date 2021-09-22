import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'es'},
    // {provide: DEFAULT_CURRENCY_CODE, useValue: 'COP'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
