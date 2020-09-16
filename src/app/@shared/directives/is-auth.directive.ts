import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/@core/services';

@Directive({
  selector: '[appIsAuth]'
})
export class IsAuthDirective implements OnInit, OnDestroy {

  private subscription$: Subscription;

  @Input()
  private appIsAuth = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.authService.isAuthenticathed().subscribe(loggedIn => {
      if (loggedIn === this.appIsAuth) {
        if (!this.viewContainer.length) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
