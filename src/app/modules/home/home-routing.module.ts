import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ejemplo-page',
    loadChildren: () => import('../example/example.module').then(m => m.ExampleModule)
  },
  {
    path: '**',
    redirectTo: 'ejemplo-page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
