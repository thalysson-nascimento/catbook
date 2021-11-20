import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((module) => module.HomeModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./pages/animals/animals.module').then((module) => module.AnimalsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
