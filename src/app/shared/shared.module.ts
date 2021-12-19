import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const baseModule = [
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    CommonModule, ...baseModule
  ],
  exports: [
    ...baseModule,
  ]
})
export class SharedModule { }
