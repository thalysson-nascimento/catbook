import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './../../components/message/message/message.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
