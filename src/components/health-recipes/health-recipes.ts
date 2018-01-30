import { Component } from '@angular/core';

/**
 * Generated class for the HealthRecipesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-recipes',
  templateUrl: 'health-recipes.html'
})
export class HealthRecipesComponent {

  text: string;

  constructor() {
    console.log('Hello HealthRecipesComponent Component');
    this.text = 'Hello World';
  }

}
