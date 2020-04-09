import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeModule } from 'src/app/@theme/theme.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AdminRoutingModule,
    ThemeModule
  ]
})
export class AdminModule { }
