import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shell/header/header.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material.module';
import { ShellLayoutComponent } from './components/shell/shell-layout/shell-layout.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  LoginComponent,
  RegistrationComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ShellLayoutComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...COMPONENTS],
})
export class CoreModule {}
