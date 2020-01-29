import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from '../store/states/product.state';

@NgModule({
  declarations: [
    CatalogueComponent,
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FormsModule,
  ]
})
export class CatalogueModule { }
