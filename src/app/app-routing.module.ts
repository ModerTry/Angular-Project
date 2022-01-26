import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { LaceComponent } from './lace/lace.component';
import { RidaComponent } from './rida/rida.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'rida', component: RidaComponent },
  {path:'product-details', component: ProductDetailsComponent },
  {path:'ridaCollection/:id', component: ProductDetailsComponent },
  {path:'lace', component:LaceComponent}, 
  {path:'about-us',component:AboutUsComponent},
  {path: 'contact-us', component:ContactUsComponent},
  {path:'cart', component:CartComponent },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,RidaComponent,ProductDetailsComponent,LaceComponent,AboutUsComponent,ContactUsComponent, PageNotFoundComponent
,CartComponent]
