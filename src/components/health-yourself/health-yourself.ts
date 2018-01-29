import { Component } from '@angular/core';

/**
 * Generated class for the HealthYourselfComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-yourself',
  templateUrl: 'health-yourself.html'
})
export class HealthYourselfComponent {

  text: string;

  constructor() {
    console.log('Hello HealthYourselfComponent Component');
    this.text = 'Hello World';
  }

}
