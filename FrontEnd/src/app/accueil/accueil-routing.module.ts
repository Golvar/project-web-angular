import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil.component';


const routes: Routes = [
  { path: '', children: [
      { path: '', component: AccueilComponent },
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
export class AccueilRoutingModule { }
