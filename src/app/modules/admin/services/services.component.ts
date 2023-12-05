import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { categoryService } from 'src/app/values/category';
import { mooreServices, servicesValue } from 'src/app/values/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ServicesComponent implements OnInit {

  services: Service[] = [];
  categories: Category[] = [];

  currentUser: User = new User();
  currentService: Service = new Service();

  mooreServices: Service[] = [];

  selectedCategory: number = 0;
  selectedService: Service = new Service();

  expand: boolean[] = [];

  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private _authService: AuthService,
  ) { }

  /**
   * OnInit
   */
  ngOnInit(): void {

    this.expand = Array.from({ length: this.mooreServices.length }, () => false);

    this.services = servicesValue;
    if (this.services.length > 0) {
      this.selectedService = this.services[0];
    }

    this.categories = categoryService;

    this.currentUser = this._authService.getLoggedInUser();
  }


  /**
   * Sets selected service to dynamically display its details.
   * @param service 
   */
  selectService(service: Service): void {
    this.selectedService = service;
  }

  /**
   * 
   */
  redirectToReservation(): void {
    this._router.navigate(['/appointment-scheduler']);
  }

  /**
   * 
   * @returns 
   */
  filteredServices(): Service[] {
    this.mooreServices = mooreServices;
    if (!this.selectedCategory) {
      return this.mooreServices;
    } else {
      // Filtrar productos por la categoría seleccionada
      return this.mooreServices.filter(service => service.category === this.selectedCategory);
    }
  }


  openModal(service:Service): void {
    this.currentService = service;
    
    this._dialog.open(ModalComponent, {
      data: {
        type: 'service',
        data: this.currentService,
      },
      width: '40%',
      height: '80%',
    });

  }
}
