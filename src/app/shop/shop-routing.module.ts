import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SearchComponent} from './pages/search/search.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: 'Inicio'
        },
      },
      {
        path: 'search/:id',
        component: SearchComponent,
        data: {
          breadcrumb: 'Busqueda'
        },
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          breadcrumb: 'Pago'
        },
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        data: {
          breadcrumb: 'Iniciar sesión'
        },
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
