import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PagesRoutingModule,

    ThemeModule,
  ]
})
export class PagesModule { }
