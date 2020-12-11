import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class CoverService {

  private renderer: Renderer2;
  private class: string;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.router.events.pipe(
      filter(e => e instanceof ActivationStart)
    ).subscribe((e: ActivationStart) => {
      if (e.snapshot?.data?.light?.class && e.snapshot?.data?.dark?.class) {
        this.class = this.themeService.isLightTheme() ? e.snapshot.data.light.class : e.snapshot.data.dark.class;
        this.renderer.addClass(this.document.body, this.class);
      } else {
        this.renderer.removeClass(this.document.body, this.class);
      }
    });
  }
}
