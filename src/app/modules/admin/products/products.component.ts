import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { CartService } from 'src/app/services/cart/cart.service';
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
    private _cartService: CartService,
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

    const quantity = product.quantity === 0 ? 1 : product.quantity;

    const nameArray = product.name.split(' ').slice(0, 2);
    const truncatedName = nameArray.join(' ');

    const productUpdated: Product = {
      ...product,
      name: truncatedName,
      quantity: quantity
    };

    this._cartService.addToCart(productUpdated);

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
