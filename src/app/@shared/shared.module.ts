import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginBtnComponent, ProfileCircleComponent } from './components';
import { HasRoleDirective, IsAuthDirective } from './directives';
import { MaterialModule } from '../material.module';

const COMPONENTS = [
  LoginBtnComponent,
  ProfileCircleComponent
];

const DIRECTIVES = [
  HasRoleDirective,
  IsAuthDirective
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
