import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop'
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
    data: {
      breadcrumb: 'Tienda'
    },
  },
  {
    path: '**', pathMatch: 'full', redirectTo: '404',
  },
  {
    path: '404',
    component: ErrorPageComponent,
    data: {
      breadcrumb: 'Error 404'
    },
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
