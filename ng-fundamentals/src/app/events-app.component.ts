import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
    <app-nav-bar></app-nav-bar>
    <app-events-lists></app-events-lists>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
