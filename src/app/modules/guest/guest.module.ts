import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { ProjectStoreModule } from 'src/app/stores';
import { ProjectCardComponent } from './components';
import { GuestRoutingModule } from './guest-routing.module';
import { ContactComponent, HomeComponent, ProfileComponent, ProjectsComponent } from './pages';

const PAGES = [
  HomeComponent,
  ProjectsComponent,
  ProfileComponent,
  ContactComponent
];

const COMPONENTS = [
  ProjectCardComponent
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
    SharedModule,
    FontAwesomeModule,
    ProjectStoreModule
  ]
})
export class GuestModule { }
