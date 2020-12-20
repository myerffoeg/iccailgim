import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HasRoleDirective, IsAuthDirective } from './directives';
import { TruncatePipe } from './pipes';

const COMPONENTS = [

];

const DIRECTIVES = [
  HasRoleDirective,
  IsAuthDirective
];

const PIPES = [
  TruncatePipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
