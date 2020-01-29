import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    FormsModule
  ]
})
export class ConnexionModule { }
