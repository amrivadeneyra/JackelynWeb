import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentRoute: string | null = "";

  constructor(
    private router: Router) { }

  ngOnInit(): void { }

  goIndexSection(): void {
    this.router.navigate(['/home']);
  }

  goServicesSection(): void {
    this.router.navigate(['/services']);
  }

  goProductsSection(): void {
    this.router.navigate(['/products']);
  }

  /*   goGalerySection(): void {
      this.router.navigate(['/galery']);
    }
  
    goContactSection(): void {
      this.router.navigate(['/contact']);
    } */


}
