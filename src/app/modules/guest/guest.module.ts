import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent, ProfileComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GuestRoutingModule,
    ThemeModule
  ]
})
export class GuestModule { }
