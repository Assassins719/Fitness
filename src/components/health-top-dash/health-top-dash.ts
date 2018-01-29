import { Component } from '@angular/core';

/**
 * Generated class for the HealthTopDashComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-top-dash',
  templateUrl: 'health-top-dash.html'
})
export class HealthTopDashComponent {

  text: string;

  constructor() {
    console.log('Hello HealthTopDashComponent Component');
    this.text = 'Hello World';
  }

}
