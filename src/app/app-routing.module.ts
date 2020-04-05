import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@core/guards/auth.guard';
import { AppUserRole } from './@core/services/auth.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/guest/guest.module').then(m => m.GuestModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [
      AuthGuard
    ],
    canActivateChild: [
      AuthGuard
    ],
    canDeactivate: [
      AuthGuard
    ],
    canLoad: [
      AuthGuard
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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
