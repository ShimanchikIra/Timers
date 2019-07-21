import {Component, ViewChild} from '@angular/core';
import {TimerDefaultComponent} from './timers/timer-default/timer-default.component';
import {TimerOnPushComponent} from './timers/timer-on-push/timer-on-push.component';
import {TimerOnPushCDComponent} from './timers/timer-on-push-cd/timer-on-push-cd.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: number = null;
  @ViewChild('timerDefault', {static: false})
  timerDefault: TimerDefaultComponent;
  @ViewChild('timerOnPush', {static: false})
  timerOnPush: TimerOnPushComponent;
  @ViewChild('timerOnPushCD', {static: false})
  timerOnPushCD: TimerOnPushCDComponent;

  constructor() { }

  sendValue() {
    this.timerDefault.value = this.value;
    this.timerDefault.addValue();
    this.timerOnPush.value = this.value;
    this.timerOnPush.addValue();
    this.timerOnPushCD.value = this.value;
    this.timerOnPushCD.addValue();
  }



}
