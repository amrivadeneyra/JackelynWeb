import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentUser: User = new User();

  constructor(
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {

    this.currentUser = this._authService.getLoggedInUser();

  }

  signOut(): void {
    this._authService.logout();
    window.location.reload();
    this.closeModal.emit(true);
  }
}
