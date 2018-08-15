import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductoverviewComponent } from './productoverview/productoverview.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  {path: 'products',component:ProductsComponent, children:[
    {path: '',component:ProductoverviewComponent},
    {path: 'new',component:NewproductComponent},
    {path: 'edit/:id',component:EditproductComponent}
  ]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
