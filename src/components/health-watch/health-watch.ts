import { Component } from '@angular/core';

/**
 * Generated class for the HealthWatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-watch',
  templateUrl: 'health-watch.html'
})
export class HealthWatchComponent {

  text: string;

  constructor() {
    console.log('Hello HealthWatchComponent Component');
    this.text = 'Hello World';
  }

}
