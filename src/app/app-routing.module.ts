import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  {
    path: '', component: LandingComponent
  },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
