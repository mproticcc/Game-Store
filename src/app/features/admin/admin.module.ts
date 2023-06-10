import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { GamesTableComponent } from './components/games-table/games-table.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { GameAdministrationModalComponent } from './components/game-administration-modal/game-administration-modal.component';

const COMPONENTS = [
  AdminComponent,
  GamesTableComponent,
  GameAdministrationModalComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
  exports: [...COMPONENTS],
})
export class AdminModule {}
