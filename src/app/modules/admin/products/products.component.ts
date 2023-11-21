import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { categoryValue } from 'src/app/values/category';
import { productsValue } from 'src/app/values/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  selectedCategory: number = 0;

  constructor(
    private notificationService: NotificationService,
  ) { }

  /**
  * OnInit
  */
  ngOnInit(): void {
    this.products = productsValue;
    this.categories = categoryValue;
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

  groupedEvent(selectedCategoryId: number): void {
    this.selectedCategory = selectedCategoryId;
  }

  filteredProducts(): Product[] {
    if (!this.selectedCategory) {
      return this.products;
    } else {
      // Filtrar productos por la categoría seleccionada
      return this.products.filter(product => product.category === this.selectedCategory);
    }
  }

}
