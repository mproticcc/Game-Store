import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './features/games/components/games/games.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    // component: GamesComponent,
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
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
