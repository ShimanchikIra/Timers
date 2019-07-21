import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerDefaultComponent } from './timers/timer-default/timer-default.component';
import { TimerOnPushComponent } from './timers/timer-on-push/timer-on-push.component';
import { TimerOnPushCDComponent } from './timers/timer-on-push-cd/timer-on-push-cd.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimerDefaultComponent,
    TimerOnPushComponent,
    TimerOnPushCDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
