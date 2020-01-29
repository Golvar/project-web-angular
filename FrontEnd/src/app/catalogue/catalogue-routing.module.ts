import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue.component'

const routes: Routes = [
  { path: '', children: [
      { path: '', component: CatalogueComponent },
    ]  
  },
  { path:"detail/:name",
    loadChildren: '../detail/detail.module#DetailModule'  }
];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
 ]

})
export class CatalogueRoutingModule { }
