import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent, ProfileComponent, ProjectsComponent } from './pages';

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
