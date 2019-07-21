import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-timer-default',
  templateUrl: './timer-default.component.html',
  styleUrls: ['./timer-default.component.scss']
})
export class TimerDefaultComponent implements OnInit {
  counter: number;
  @Input() value: number;

  constructor() {
    this.counter = 0;
  }
  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
  addValue() {
    this.counter += +this.value;
  }



}
