import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: CompteComponent },
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
export class CompteRoutingModule { }
