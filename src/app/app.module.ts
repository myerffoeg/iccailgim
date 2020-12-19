import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './@core/core.module';
import { SharedModule } from './@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FAB, FAS } from './font-awesome';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,

    FontAwesomeModule,
    MaterialModule,

    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),

    CoreModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      ...FAS,
      ...FAB
    );
  }
}
