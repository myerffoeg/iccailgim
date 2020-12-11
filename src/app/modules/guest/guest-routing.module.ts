import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ProfileComponent, ProjectsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      light: {
        class: 'background-light-theme'
      },
      dark: {
        class: 'background-dark-theme'
      }
    }
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GuestRoutingModule { }
