import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ProjectStoreModule } from 'src/app/stores';
import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent, ProfileComponent, ProjectsComponent } from './pages';

const PAGES = [
  HomeComponent,
  ProfileComponent,
  ProjectsComponent,
];

const COMPONENTS = [

];

@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ProjectStoreModule
  ]
})
export class GuestModule { }
