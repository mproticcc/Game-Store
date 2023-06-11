import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shell/header/header.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { ShellLayoutComponent } from './components/shell/shell-layout/shell-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  LoginComponent,
  RegistrationComponent,
  ShellLayoutComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule],
  exports: [...COMPONENTS],
})
export class CoreModule {}
