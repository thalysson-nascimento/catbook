import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

const baseModule = [CommonModule, ReactiveFormsModule];

@NgModule({
  imports: [...baseModule],
  exports: [...baseModule],
})
export class SharedModule {}
