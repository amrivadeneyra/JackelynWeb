import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { servicesValue } from 'src/app/values/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ServicesComponent implements OnInit {

  services: Service[] = [];
  selectedService: Service = new Service();

  constructor() { }

  /**
   * OnInit
   */
  ngOnInit(): void {
    this.services = servicesValue;
    if (this.services.length > 0) {
      this.selectedService = this.services[0];
    }
  }


  /**
   * Sets selected service to dynamically display its details.
   * @param service 
   */
  selectService(service: Service): void {
    this.selectedService = service;
  }
}
