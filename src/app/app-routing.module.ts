import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
},
{
  path: `medium`, loadChildren: () =>
  import('./pages/medium/medium.module').then(m => m.MediumModule)
},
{ 
  path: `exit`, loadChildren: () =>
  import('./pages/exit/exit.module').then(m => m.ExitModule)
},
{
  path: "", redirectTo: "home", pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
