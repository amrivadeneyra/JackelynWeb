import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentUser: User = new User();

  constructor(
    private router: Router,
    private _dialog: MatDialog,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this._authService.getLoggedInUser();
  }

  goIndexSection(): void {
    this.router.navigate(['/home']);
  }

  goServicesSection(): void {
    this.router.navigate(['/services']);
  }

  goProductsSection(): void {
    this.router.navigate(['/products']);
  }

  goReservationSection(): void {
    this.router.navigate(['/appointment-scheduler']);
  }

  openModal(): void {

    const userLogged = this._authService.getLoggedInUser();

    const modalType = userLogged ? 'sign-out' : 'sign-in';

    this._dialog.open(ModalComponent, {
      data: {
        type: modalType,
      },
      width: '40%',
    });

  }


}
