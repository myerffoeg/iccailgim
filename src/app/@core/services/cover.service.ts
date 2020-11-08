import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoverService {

  private renderer: Renderer2;
  private bodyClass: string;

  constructor(
    private router: Router,
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    router.events.pipe(
      filter(e => e instanceof ActivationStart)
    ).subscribe((e: ActivationStart) => {
      if (e.snapshot?.data?.bodyClass) {
        this.bodyClass = e.snapshot.data.bodyClass;
        this.renderer.addClass(this.document.body, this.bodyClass);
      } else {
        this.renderer.removeClass(this.document.body, this.bodyClass);
      }
    });
  }
}
