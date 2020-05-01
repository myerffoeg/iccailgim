import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { GuestRoutingModule } from './guest-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProjectsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    ThemeModule
  ]
})
export class GuestModule { }
