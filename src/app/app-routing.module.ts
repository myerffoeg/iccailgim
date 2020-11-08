import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './@core/guards';
import { AppUserRole } from './@core/services/auth.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/guest/guest.module').then(m => m.GuestModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [
      RoleGuard
    ],
    canLoad: [
      RoleGuard
    ],
    data: {
      roles: [
        AppUserRole.admin
      ]
    }
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
