import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule } from './../menu/menu.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, RouterModule, MenuModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
