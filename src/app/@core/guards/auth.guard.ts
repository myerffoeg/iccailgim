import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  isAuthenticated(notAuthenticathed: boolean = false): Observable<boolean> {
    return this.auth.isAuthenticathed().pipe(
      map(auth => notAuthenticathed !== auth),
      tap(auth => {
        if (!auth) {
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
    const notAuthenticathed: boolean = next?.data?.notAuthenticathed;
    return this.isAuthenticated(notAuthenticathed);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const notAuthenticathed: boolean = next?.data?.notAuthenticathed;
    return this.isAuthenticated(notAuthenticathed);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const notAuthenticathed: boolean = route?.data?.notAuthenticathed;
    return this.isAuthenticated(notAuthenticathed);
  }
}
