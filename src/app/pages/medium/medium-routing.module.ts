import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediumComponent } from './medium.component';

const routes: Routes = [
  {path: "", component: MediumComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediumRoutingModule { }
