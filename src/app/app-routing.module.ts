import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/shop/components/home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '404',
    component: ErrorPageComponent
  },

  // Inventory routes
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: (): any => import('./modules/shop/shop.module').then(m => m.ShopModule),
      },
    ]
  }
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
