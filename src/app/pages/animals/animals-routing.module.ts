import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimalsResolver } from './../../service/animals/list-animals/list-animals.resolver';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalsComponent } from './animals.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsComponent,
    resolve: {
      animals: ListAnimalsResolver,
    },
  },
  {
    path: 'new', component: NewAnimalComponent
  },
  { path: ':animalId', component: AnimalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
