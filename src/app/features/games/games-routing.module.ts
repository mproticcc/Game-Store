import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { GameOverviewComponent } from './components/game-overview/game-overview.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
  },
  {
    path: ':gamesId',
    component: GameOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
