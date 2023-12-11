import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { PdfService } from 'src/app/services/pdf/pdf.service';
export interface Boleta {
  productos: Producto[];
  datosPersonales: DatosPersonales;
  tipoPago: string; // Puedes usar un tipo específico aquí
  codigo: number;
}

export interface Producto {
  quantity: number;
  name: string;
  price: number;
  totalPrice: number
}

export interface DatosPersonales {
  correo: string;
  nombre: string;
  apellidos: string;
  numero: string;
  tipoDocumento: string;
  documento: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  @ViewChildren(MatExpansionPanel) panels!: QueryList<MatExpansionPanel>;

  currentIndex: number = 0;
  totalPrice: number = 0;
  selectedMonth: number = 0;
  selectedYear: number = 0;

  cartItems: Product[] = [];


  showPaymentDetails: boolean = false;
  selectedPaymentOption: number = 0;

  currentUser: User = new User();

  currentYear = new Date().getFullYear();

  months: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  years: number[] = Array.from({ length: 20 }, (_, index) => this.currentYear + index);


  constructor(
    private _cartService: CartService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _authService: AuthService,
    private _pdfService: PdfService,
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
   */
  loadProducts(): void {
    this._cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.calculateTotalPrice();
    });
  }

  /**
   * 
   * @returns 
   */
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  /**
   * 
   */
  goProductSection(): void {
    this._router.navigate(['/products']);
  }

  /**
   * 
   */
  nextPanel() {
    if (this.panels && this.panels.length > 0) {
      this.panels.toArray()[this.currentIndex].close();

      this.currentIndex = (this.currentIndex + 1) % this.panels.length;

      this.panels.toArray()[this.currentIndex].open();
    }
  }

  /**
   * 
   */
  togglePaymentDetails() {
    this.showPaymentDetails = this.selectedPaymentOption === 1;
  }

  /**
   * 
   * @param option 
   */
  onPaymentOptionChange(option: number) {
    this.selectedPaymentOption = option;
    this.togglePaymentDetails();
  }



  boleta!: Boleta;
  mostrarBoleta: boolean = false;

  onComprarAhoraClick() {
    let index = 0;
    this.boleta = {
      productos: this.cartItems,
      datosPersonales: {
        correo: this.currentUser.email,
        nombre: this.currentUser.name,
        apellidos: this.currentUser.last_name,
        numero: this.currentUser.telephone_number,
        tipoDocumento: 'DNI',  
        documento: '77665544',
      },
      tipoPago: this.selectedPaymentOption == 1 ? 'Tarjeta de Crédito/Débito' : 'Efectivo',
      codigo: index++,

    };

    this.mostrarBoleta = true;

    this.generatePDF(this.boleta);
  }


  generatePDF(boleta:Boleta): void {
    this._pdfService.generatePDF(boleta);
  }


}
