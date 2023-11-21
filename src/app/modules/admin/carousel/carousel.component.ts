import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';
import { Service } from 'src/app/models/service';
import { servicesValue } from 'src/app/values/service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('2s', style({ opacity: 1 }))]),
    ]),
  ],
})
export class CarouselComponent implements OnInit, OnDestroy {

  displayedServices: Service[] = [];
  currentIndex = 0;
  groupSize = 4;
  services: Service[] = [];

  private intervalSubscription: Subscription = new Subscription();

  constructor() { }


  ngOnInit(): void {
    this.services = servicesValue;
    this.updateDisplayedServices();

    this.intervalSubscription = interval(4000)
      .pipe(take(this.calculateTotalGroups()))
      .subscribe(() => this.nextGroup());
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }


  updateDisplayedServices() {
    const endIndex = this.currentIndex + this.groupSize;
    this.displayedServices = this.services.slice(this.currentIndex, endIndex);
  }

  nextGroup() {
    this.currentIndex += this.groupSize;
    if (this.currentIndex >= this.services.length) {
      this.currentIndex = 0;
    }
    this.updateDisplayedServices();

    if (this.currentIndex === 0) {
      this.restartInterval();
    }
  }

  private restartInterval() {
    this.intervalSubscription.unsubscribe();
    this.intervalSubscription = interval(4000)
      .pipe(take(this.calculateTotalGroups()))
      .subscribe(() => this.nextGroup());
  }

  private calculateTotalGroups(): number {
    return Math.ceil(this.services.length / this.groupSize);
  }
}
