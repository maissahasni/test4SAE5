import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { AddProductsComponent } from './Components/products/add-products/add-products.component';
import { ConsultProductsComponent } from './Components/products/consult-products/consult-products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/add', component: AddProductsComponent },
  { path: 'products/consult', component: ConsultProductsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
