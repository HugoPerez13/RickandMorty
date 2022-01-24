import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExitRoutingModule } from './exit-routing.module';
import { ExitComponent } from './exit.component';


@NgModule({
  declarations: [
    ExitComponent
  ],
  imports: [
    CommonModule,
    ExitRoutingModule,
    HttpClientModule
  ]
})
export class ExitModule { }
