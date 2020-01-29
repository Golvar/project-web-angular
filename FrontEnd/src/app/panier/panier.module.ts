import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    PanierRoutingModule,
    FormsModule
  ]
})
export class PanierModule { }
