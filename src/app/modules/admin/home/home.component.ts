import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/service';
import { servicesValue } from 'src/app/values/service';

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
}
