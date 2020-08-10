import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HasRoleDirective, IsAuthDirective } from './directives';

const COMPONENTS = [

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
