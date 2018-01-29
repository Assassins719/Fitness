import { Component } from '@angular/core';
import { PopoverController} from 'ionic-angular';
import { PopoverComponent } from '../popover/popover';
/**
 * Generated class for the HealthGoalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'health-goal',
  templateUrl: 'health-goal.html'
})
export class HealthGoalComponent {

  text: string;

  constructor(public popoverCtrl: PopoverController) {
    console.log('Hello HealthGoalComponent Component');
    this.text = 'Hello World';
  }
  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }
  

}
