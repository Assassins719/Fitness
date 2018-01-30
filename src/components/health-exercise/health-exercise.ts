import { Component } from '@angular/core';

/**
 * Generated class for the HealthExerciseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-exercise',
  templateUrl: 'health-exercise.html'
})
export class HealthExerciseComponent {

  text: string;

  constructor() {
    console.log('Hello HealthExerciseComponent Component');
    this.text = 'Hello World';
  }

}
