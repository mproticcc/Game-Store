import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { GamesTableComponent } from './components/games-table/games-table.component';

const COMPONENTS = [AdminComponent, GamesTableComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AdminRoutingModule],
  exports: [...COMPONENTS],
})
export class AdminModule {}
