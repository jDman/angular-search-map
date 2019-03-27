import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map.container';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [MapContainerComponent, MapComponent],
  imports: [CommonModule]
})
export class MapModule {}
