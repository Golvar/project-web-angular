import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteRoutingModule } from './compte-routing.module';
import { CompteComponent } from './compte.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RecapComponent } from '../recap/recap.component';
import { TelPipe } from '../models/telpipe';

@NgModule({
  declarations: [
    CompteComponent,
    RecapComponent,
    TelPipe
  ],
  imports: [
    CommonModule,
    CompteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CompteModule { }
