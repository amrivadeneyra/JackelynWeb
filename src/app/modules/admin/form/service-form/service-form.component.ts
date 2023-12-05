import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent implements OnInit {
  @Input() data: any;

  serviceForm: FormGroup = new FormGroup({});

  private updateTimeout: any;

  constructor(
    private _notificationService: NotificationService,
    private _changeDetector: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
  }

  updateField(fieldName: string, event: any): void {

    this.data.data[fieldName] = event.target.value;

    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }

    this.updateTimeout = setTimeout(() => {
      this.updateProduct();
      this._changeDetector.detectChanges();
    }, 1000);

  }

  updateProduct(): void {
   /*  const updatedFields: Partial<Service> = {
      name: this.data.data.name,
      price: this.data.data.price,
      description: this.data.data.description,
      duration: this.data.data.duration,
      category: this.data.data.category,
      availability: this.data.data.availability,
      image: this.data.data.image,
      tags: this.data.data.tags,
      discount: this.data.data.discount,
      relatedServices: this.data.data.relatedServices,
    }; */

    this._notificationService.showSuccess("Producto actualzado");
  }


}
