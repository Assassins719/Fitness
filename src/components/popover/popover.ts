import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
