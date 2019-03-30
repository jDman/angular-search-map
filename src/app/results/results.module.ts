import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsContainerComponent } from './results.container';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [ResultsContainerComponent, ResultsComponent, ResultComponent],
  imports: [CommonModule]
})
export class ResultsModule {}
