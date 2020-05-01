import { Injectable } from '@angular/core';
import { AuthService, AppUserRole } from './auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private authService: AuthService) { }

  hasSomeRoles(roles: AppUserRole[]): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => user?.roles?.some(role => roles?.includes(role)))
    );
  }
}
