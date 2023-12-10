import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    this.loadCartItems();
  }

  /**
   * 
   */
  private loadCartItems(): void {
    const existingProductsString = localStorage.getItem('cart');
    const existingProducts: Product[] = existingProductsString ? JSON.parse(existingProductsString) : [];
    this.cartItemsSubject.next(existingProducts);
  }

  /**
   * 
   * @param products 
   */
  private saveCartItemsToLocalStorage(products: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  private updateProduct(product: Product): void {
    const existingProducts = this.cartItemsSubject.value;
    const existingProductIndex = existingProducts.findIndex(p => p._id === product._id);

    if (existingProductIndex !== -1) {
      // Realizar una copia profunda del producto antes de la actualización
      const updatedProduct = { ...existingProducts[existingProductIndex] };

      updatedProduct.quantity = product.quantity;
      updatedProduct.totalPrice = product.price * product.quantity;

      // Actualizar el carrito con la copia actualizada
      existingProducts[existingProductIndex] = updatedProduct;

      this.cartItemsSubject.next([...existingProducts]);
      this.saveCartItemsToLocalStorage(existingProducts);
    }
  }

  /**
   * 
   * @param product 
   */
  addToCart(product: Product): void {
    const existingProducts = this.cartItemsSubject.value;
    const existingProductIndex = existingProducts.findIndex(p => p._id === product._id);
    product.totalPrice = product.price;

    if (existingProductIndex !== -1) {
      // El producto ya está en el carrito, incrementa la cantidad
      existingProducts[existingProductIndex].quantity += product.quantity;
    } else {
      // El producto no está en el carrito, agrégalo
      existingProducts.push(product);
    }

    this.cartItemsSubject.next(existingProducts);

    // Guardar en localStorage después de actualizar el array de productos
    this.saveCartItemsToLocalStorage(existingProducts);
  }

  /**
   * 
   * @param productsToDelete 
   */
  clearCart(productsToDelete: Product[]): void {
    const existingProducts = this.cartItemsSubject.value;

    // Filtrar los productos que no deben ser eliminados
    const remainingProducts = existingProducts.filter(p => !productsToDelete.some(pd => pd._id === p._id));

    this.cartItemsSubject.next(remainingProducts);
    this.saveCartItemsToLocalStorage(remainingProducts);
  }

  /**
   * 
   * @param product 
   */
  incrementQuantity(product: Product): void {
    // Realizar una copia profunda del producto antes de la actualización
    const updatedProduct = { ...product };
    updatedProduct.quantity++;
    this.updateProduct(updatedProduct);
  }

  /**
   * 
   * @param product 
   */
  decrementQuantity(product: Product): void {
    if (product.quantity > 1) {
      // Realizar una copia profunda del producto antes de la actualización
      const updatedProduct = { ...product };
      updatedProduct.quantity--;
      this.updateProduct(updatedProduct);
    }
  }

}
