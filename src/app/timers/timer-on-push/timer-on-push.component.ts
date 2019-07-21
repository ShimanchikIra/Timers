import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer-on-push',
  templateUrl: './timer-on-push.component.html',
  styleUrls: ['./timer-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerOnPushComponent implements OnInit {
  counter: number;
  @Input() value: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
  addValue() {
    this.counter += +this.value;
  }

}
