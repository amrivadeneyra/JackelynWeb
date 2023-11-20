import { Component } from '@angular/core';
import { Service } from 'src/app/models/service';
import { servicesValue } from 'src/app/values/service';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss']
})
export class AppointmentSchedulerComponent {

  services: Service[] = [];

  ngOnInit(): void {
    this.services = servicesValue;
  }

}
