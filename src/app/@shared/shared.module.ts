import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components';
import { HasRoleDirective, IsAuthDirective } from './directives';
import { DatedifferencePipe, TruncatePipe } from './pipes';

const COMPONENTS = [
  NavbarComponent
];

const DIRECTIVES = [
  HasRoleDirective,
  IsAuthDirective
];

const PIPES = [
  TruncatePipe,
  DatedifferencePipe
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule { }
