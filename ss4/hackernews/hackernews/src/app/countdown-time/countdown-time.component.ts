import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.css']
})
export class CountdownTimeComponent implements OnInit {

  constructor() { }

  private interValid = 0;
  message = '';
  remainingTime: number;
  @Input() seconds = 11;
  ngOnDestroy() {
    this.clearTime();
  }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  clearTime() {
    clearInterval(this.interValid);
  }

  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;

    }
  }

  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset() {
    this.clearTime();
    this.remainingTime=this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  private countDown() {
    this.clearTime();
    this.interValid = window.setInterval(()=>{
      this.remainingTime-=1;
      if(this.remainingTime==0) {
        this.message="Blast off!";
        this.clearTime()
        this.start();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    },1000);
  }


}
