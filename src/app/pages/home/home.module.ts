import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputModule } from './../../components/input/input.module';
import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    InputModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
