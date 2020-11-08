import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ProfileComponent, ProjectsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      class: 'transparent',
      background: `url('/assets/images/home.jpg') no-repeat center center fixed`
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
