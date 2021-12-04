import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticatedGuard } from './service/user/user-auth/autenticated.guard';
import { LoginGuard } from './service/user/user-auth/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (module) => module.HomeModule
      ),
    canLoad: [LoginGuard],
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./pages/animals/animals.module').then(
        (module) => module.AnimalsModule
      ),
    canLoad: [AutenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
