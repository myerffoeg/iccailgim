import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppUserRole } from '../services/auth.service';
import { RoleService } from '../services/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private role: RoleService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  hasSomeRoles(roles: AppUserRole[]): Observable<boolean> {
    return this.role.hasSomeRoles(roles).pipe(
      tap(hasSomeRoles => {
        if (!hasSomeRoles) {
          this.matSnackBar.open(`You miss the authorization to see this page.`, '', {
            duration: 7500,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
          });
          this.router.navigate(['/']);
        }
      })
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles: AppUserRole[] = next?.data?.roles ?? [];
    return this.hasSomeRoles(roles);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const roles: AppUserRole[] = next?.data?.roles ?? [];
    return this.hasSomeRoles(roles);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const roles: AppUserRole[] = route?.data?.roles ?? [];
    return this.hasSomeRoles(roles);
  }
}
