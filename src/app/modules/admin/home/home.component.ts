import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reviews } from 'src/app/models/reviews';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';
import { reviewsValue } from 'src/app/values/reviews';
import { servicesValue } from 'src/app/values/service';
import { usersValue } from 'src/app/values/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sectionBackgrounds: string[] = [
    '../../../../assets/image/other/index-1.jpg',
    '../../../../assets/image/other/index-2.jpg',
    '../../../../assets/image/other/index-3.jpg',
  ];

  currentBackgroundIndex = 0;  // Índice de la imagen actual

  sectionContent: { text: string, buttonText: string, buttonLink: string }[] = [
    { text: "Bienvenido a D'Jackelyn Salón-Spa", buttonText: 'Tu experiencia de belleza y relajación comienza aquí', buttonLink: 'Descubre Nuestros Servicios' },
    { text: "Tu escapada a la serenidad comienza aquí en D'Jackelyn Salón-Spa", buttonText: 'Explora Nuestros Tratamientos', buttonLink: 'Deseo Explorar' },
    { text: "Sumérgete en un mundo de relajación y renovación en D'Jackelyn Salón-Spa", buttonText: 'Descubre Ofertas Exclusivas', buttonLink: 'Conocer Ofertas' }
  ];

  currentSectionContent = this.sectionContent[this.currentBackgroundIndex];

  services: Service[] = [];
  selectedService: Service = new Service();

  users: User[] = [];
  reviews: Reviews[] = [];

  currentIndex: number = 0;
  batchSize: number = 3; // Cantidad de reseñas a mostrar a la vez

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // Establecer la imagen de fondo inicial
    this.services = servicesValue;
    if (this.services.length > 0) {
      this.selectedService = this.services[0];
    }
    this.changeBackgroundImage();
    this.users = usersValue;
    this.reviews = reviewsValue;
  }

  // Función para cambiar la imagen de fondo
  changeBackgroundImage() {
    const section = document.getElementById('index');
    if (section) {
      section.style.backgroundImage = `url('${this.sectionBackgrounds[this.currentBackgroundIndex]}')`;
      this.currentSectionContent = this.sectionContent[this.currentBackgroundIndex];
    }
  }

  // Evento clic para el botón de adelante
  onLeftButtonClick() {
    this.currentBackgroundIndex = (this.currentBackgroundIndex - 1 + this.sectionBackgrounds.length) % this.sectionBackgrounds.length;
    this.changeBackgroundImage();
  }

  // Evento clic para el botón de atrás
  onRightButtonClick() {
    this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.sectionBackgrounds.length;
    this.changeBackgroundImage();
  }

  /**
 * 
 */
  redirectToServices(): void {
    this.router.navigate(['/services']);
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
    this.router.navigate(['/appointment-scheduler']);
  }

  /**
   * 
   * @param userId 
   * @returns 
   */
  getUserData(userId: string): User | null {
    return usersValue.find((user) => user._id === userId) || null;
  }

  /**
   * 
   * @param review 
   * @returns 
   */
  isVisible(review: any): boolean {
    const index = this.reviews.indexOf(review);
    return index >= this.currentIndex && index < this.currentIndex + this.batchSize;
  }

  /**
   * 
   */
  showNextReviews(): void {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  /**
   * 
   */
  showPreviousReviews(): void {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }

}
