import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsComponent } from './animals.component';
import { AnimalsRoutingModule } from './animals-routing.module';


@NgModule({
  declarations: [AnimalsComponent],
  imports: [
    CommonModule,
    AnimalsRoutingModule
  ]
})
export class AnimalsModule { }
