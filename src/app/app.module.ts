import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CoreModule } from './core/core.module';
import { MapModule } from './map/map.module';
import { ResultsModule } from './results/results.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot(),
    CoreModule,
    MapModule,
    ResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
