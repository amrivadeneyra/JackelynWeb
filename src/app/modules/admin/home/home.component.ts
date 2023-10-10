import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    // Establecer la imagen de fondo inicial
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
}
