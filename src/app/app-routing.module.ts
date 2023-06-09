import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { RegistrationComponent } from './core/components/auth/registration/registration.component';
import { ShellLayoutComponent } from './core/components/shell/shell-layout/shell-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'games',
        pathMatch: 'full',
      },
      {
        path: 'games',
        loadChildren: () =>
          import('./features/games/games.module').then(
            (module) => module.GamesModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./features/admin/admin.module').then(
            (module) => module.AdminModule
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
