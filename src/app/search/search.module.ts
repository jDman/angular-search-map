import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchContainerComponent } from './search.container';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchContainerComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ],
  exports: [SearchContainerComponent, SearchComponent]
})
export class SearchModule {}
