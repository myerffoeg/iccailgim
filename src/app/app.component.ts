import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            opacity: 0,
            left: 0,
            overflow: 'hidden'
          }),
        ], { optional: true }),
        query(':enter', [
          animate('1.5s ease', style({
            opacity: 1,
            overflow: 'auto'
          }
          )),
        ], { optional: true })
      ]),
    ])
  ]
})
export class AppComponent {

  constructor() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData;
  }
}
