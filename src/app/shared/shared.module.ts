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

const COMPONENTS = [SearchComponent, NotFoundComponent, LoaderComponent];
const PIPES = [DescriptionLimitPipe, CreatorPipe];
const DIRECTIVES = [PriceDirective];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class SharedModule {}