import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import { servicesValue } from 'src/app/values/service';
import { productsValue } from 'src/app/values/product';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentUser: User = new User();

  search: any
  serviceAndProducts: any[] = []

  searchTerm: string = '';

  constructor(
    private router: Router,
    private _dialog: MatDialog,
    private _authService: AuthService,
  ) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.currentUser = this._authService.getLoggedInUser();

  }

  /**
   * 
   */
  goIndexSection(): void {
    this.router.navigate(['/home']);
  }

  /**
   * 
   */
  goServicesSection(): void {
    this.router.navigate(['/services']);
  }

  /**
   * 
   */
  goProductsSection(): void {
    this.router.navigate(['/products']);
  }

  /**
   * 
   */
  goReservationSection(): void {
    this.router.navigate(['/appointment-scheduler']);
  }

  /**
   * 
   */
  openSignInModal(): void {
    const userLogged = this._authService.getLoggedInUser();
    const modalType = userLogged ? 'sign-out' : 'sign-in';
    const sizeWidth = '45%';

    this.openModal(modalType, sizeWidth);
  }

  /**
   * 
   */
  openCartModal(): void {
    const cartModalType = 'shopping-cart';
    const sizeWidth = '60%';
    this.openModal(cartModalType, sizeWidth);
  }

  /**
   * 
   * @param modalType 
   */
  openModal(modalType: string, sizeWidth?: string): void {
    this._dialog.open(ModalComponent, {
      data: {
        type: modalType,
      },
      width: sizeWidth,
    });
  }

  /**
   * 
   * @param search 
   */
  onSearchChange(search: string): any {
    this.serviceAndProducts = this.filterSearch(search)
  }

  /**
   * 
   * @param searchTerm 
   * @returns 
   */
  filterSearch(searchTerm: string) {
    const filter = [...servicesValue, ...productsValue]
    searchTerm = searchTerm.toLowerCase();
    return filter.filter(f => f.name.toLowerCase().includes(searchTerm));

  }

  /**
   * 
   */
  clearSearch(): void {
    this.searchTerm = '';
  }

  /**
   * 
   * @param search 
   */
  goToSearch(search: any): void {
    console.log("_id", search._id)
  }


}
