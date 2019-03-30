import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './search.container';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchContainerComponent, SearchComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SearchModule {}
