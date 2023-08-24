import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DescriptionLimitPipe } from './pipes/description-limit.pipe';
import { CreatorPipe } from './pipes/creator.pipe';
import { PriceDirective } from './directives/price.directive';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from './modules/material.module';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { DialogComponent } from './components/dialog/dialog.component';

const COMPONENTS = [
  SearchComponent,
  NotFoundComponent,
  LoaderComponent,
  CloseButtonComponent,
];
const PIPES = [DescriptionLimitPipe, CreatorPipe];
const DIRECTIVES = [PriceDirective];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES, DialogComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class SharedModule {}
