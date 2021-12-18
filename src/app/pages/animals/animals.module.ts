import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './../../components/animals/animal/animal.component';
import { ListAnimalsComponent } from './../../components/animals/list-animals/list-animals.component';
import { CardModule } from './../../components/card/card.module';
import { GridAnimalsPhotosComponent } from './../../components/grid-animals-photos/grid-animals-photos.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsComponent } from './animals.component';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    GridAnimalsPhotosComponent,
    ListAnimalsComponent,
    AnimalDetailsComponent
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
