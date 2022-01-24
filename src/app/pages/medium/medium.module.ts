import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumRoutingModule } from './medium-routing.module';
import { MediumComponent } from './medium.component';


@NgModule({
  declarations: [
    MediumComponent
  ],
  imports: [
    CommonModule,
    MediumRoutingModule
  ]
})
export class MediumModule { }
