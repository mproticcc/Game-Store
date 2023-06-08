import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameOverviewComponent } from './components/game-overview/game-overview.component';
import { GamesComponent } from './components/games/games.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';

const COMPONENTS = [GameCardComponent, GameOverviewComponent, GamesComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    GamesRoutingModule,
    RouterModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [...COMPONENTS],
})
export class GamesModule {}
