import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion.component';

const routes: Routes = [
  { path: '', children: [
      { path: '', component: ConnexionComponent },
    ],  
  },
  { path: 'catalogue', loadChildren: './catalogue/catalogue.module#CatalogueModule' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConnexionRoutingModule { }
