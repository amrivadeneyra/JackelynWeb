import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { productsValue } from 'src/app/values/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( 
    private notificationService: NotificationService,
  ) { }

  /**
  * OnInit
  */
  ngOnInit(): void {
    this.products = productsValue;;
  }

  /**
   * 
   * @param product 
   */
  addToCart(product: Product) {
    // Recuperar productos existentes del localStorage
    const existingProductsString = localStorage.getItem('cart');
    const existingProducts: Product[] = existingProductsString ? JSON.parse(existingProductsString) : [];

    // Agregar el nuevo producto al array
    existingProducts.push(product);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(existingProducts));

    this.notificationService.showSuccess("Se añadió correctamente su producto al carrito de compras.")

  }

  /**
   * 
   * @param product 
   */
  increaseQuantity(product: Product) {
    product.quantity = (product.quantity || 1) + 1;

  }

  /**
   * 
   * @param product 
   */
  decreaseQuantity(product: Product) {
    if (product.quantity && product.quantity > 1) {
      product.quantity -= 1;
    }
  }

}
