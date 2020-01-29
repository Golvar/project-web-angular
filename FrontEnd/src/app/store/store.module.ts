import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './states/product.state';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      ProductState
    ], { developmentMode: true })
  ]
})
export class StoreModule { }
