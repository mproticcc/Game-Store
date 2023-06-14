import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TableOfGamesComponent } from './components/table-of-games/table-of-games.component';
import { AdminModalComponent } from './components/admin-modal/admin-modal.component';

const COMPONENTS = [AdminComponent, TableOfGamesComponent, AdminModalComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AdminRoutingModule, SharedModule, MaterialModule],
  exports: [...COMPONENTS],
})
export class AdminModule {}
