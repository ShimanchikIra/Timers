import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer-on-push-cd',
  templateUrl: './timer-on-push-cd.component.html',
  styleUrls: ['./timer-on-push-cd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerOnPushCDComponent implements OnInit {
  counter: number;
  @Input() value: number;

  constructor(private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    this.counter = 0;
    setInterval(() => {
      this.counter++;
      this.changeDetection.detectChanges();
    }, 1000);
  }
  addValue() {
    this.counter += +this.value;
  }


}
