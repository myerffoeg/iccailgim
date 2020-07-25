import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { GuestRoutingModule } from './guest-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { HomeComponent, ProjectsComponent, ProfileComponent } from './pages';

const PAGES = [
  HomeComponent,
  ProjectsComponent,
  ProfileComponent
];

const COMPONENTS = [

];

@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class GuestModule { }
