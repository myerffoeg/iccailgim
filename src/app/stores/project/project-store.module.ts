import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProjectEffects } from './project.effects';
import { projectReducer } from './project.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('project', projectReducer),
    EffectsModule.forFeature([
      ProjectEffects
    ])
  ]
})
export class ProjectStoreModule { }
