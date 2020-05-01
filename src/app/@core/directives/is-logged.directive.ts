import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services';

@Directive({
  selector: '[appIsLogged]'
})
export class IsLoggedDirective implements OnInit, OnDestroy {

  private subscription$: Subscription;

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.authService.isAuthenticathed().subscribe(loggedIn => {
      if (loggedIn) {
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
