import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() hidden: boolean = false;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  cartItems: Product[] = [];
  selectedProducts: Product[] = [];

  currentUser: User = new User();

  constructor(
    private _cartService: CartService,
    private _notificationService: NotificationService,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.loadProducts();
    this.currentUser = this._authService.getLoggedInUser();
  }

  /**
   * 
   * @param product 
   */
  clearCart(product: Product): void {
    this._cartService.clearCart([product]);
    this._notificationService.showSuccess('Se eliminó el producto del carrito')
  }

  /**
   * 
   */
  loadProducts(): void {
    this._cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  /**
   * 
   * @param item 
   */
  incrementQuantity(item: Product): void {
    this._cartService.incrementQuantity(item)
  }

  /**
   * 
   * @param item 
   */
  decrementQuantity(item: Product): void {
    this._cartService.decrementQuantity(item)
  }

  /**
   * 
   */
  goCartSection(): void {
    this._router.navigate(['/cart']);
    this.closeModal.emit(true);
  }

}
