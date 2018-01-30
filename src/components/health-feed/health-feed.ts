import { Component } from '@angular/core';

/**
 * Generated class for the HealthFeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-feed',
  templateUrl: 'health-feed.html'
})
export class HealthFeedComponent {

  text: string;

  constructor() {
    console.log('Hello HealthFeedComponent Component');
    this.text = 'Hello World';
  }

}
