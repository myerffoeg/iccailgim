import { Directive, ViewContainerRef, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { RoleService, AppUserRole } from '../services';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  private subscription$: Subscription;

  private roles: AppUserRole[] = [];

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef,
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.roleService.hasSomeRoles(this.roles).subscribe(hasRole => {
      if (hasRole) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
