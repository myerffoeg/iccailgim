import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private currentTheme = new BehaviorSubject<string>('app-light-theme');

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.currentTheme.subscribe((newTheme) => {
      this.renderer.addClass(this.document.body, newTheme);
    });
  }

  switchTheme(): void {
    const oldTheme = this.currentTheme.getValue();
    this.renderer.removeClass(this.document.body, oldTheme);
    this.currentTheme.next(oldTheme === 'app-light-theme' ? 'app-dark-theme' : 'app-light-theme');
  }

  isLightTheme(): boolean {
    return this.currentTheme.getValue() === 'app-light-theme';
  }

  isDarkTheme(): boolean {
    return !this.isLightTheme();
  }
}
