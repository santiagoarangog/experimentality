import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslocoRootModule} from './transloco-root.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

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
    /**
     * Solución a error presentado en el build que se pierde la ruta donde esta*/
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
