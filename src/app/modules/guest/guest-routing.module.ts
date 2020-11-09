import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ProfileComponent, ProjectsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      class: 'transparent',
      background: `linear-gradient(to bottom, rgba(11, 113, 132, .25), transparent), url('/assets/images/home.jpg')`
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
