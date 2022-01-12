import { LaceComponent } from './lace/lace.component';
import { PannelComponent } from './pannel/pannel.component';
import { RidaComponent } from './rida/rida.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'rida', component: RidaComponent },
  {path:'pannel', component: PannelComponent},
  {path:'lace', component:LaceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
