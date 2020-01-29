import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PanierComponent } from './panier.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: PanierComponent },
    ]  
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PanierRoutingModule { }
