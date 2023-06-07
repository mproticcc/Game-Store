import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GameCardsComponent } from './components/game-cards/game-cards.component';
import { GameOverviewComponent } from './components/game-overview/game-overview.component';
import { GamesComponent } from './components/games/games.component';

const COMPONENTS = [GameCardsComponent, GameOverviewComponent, GamesComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, GamesRoutingModule],
  exports: [...COMPONENTS],
})
export class GamesModule {}
