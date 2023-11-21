import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/models/service';
import { servicesValue } from 'src/app/values/service';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.scss']
})
export class AppointmentSchedulerComponent {

  services: Service[] = [];

  appointmentSchedulerForm!: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.services = servicesValue;
    this.initAppointmentSchedulerForm();
  }

  /**
   * 
   */
  resetDate(): void { }

  /**
   * 
   */
  initAppointmentSchedulerForm(): void {
    this.appointmentSchedulerForm = this.fb.group({
      _id: [''],
      client_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      emergency_contact: [''],

      service_name: ['', Validators.required],
      price: [0, Validators.required],
      description: [''],
      category: [0, Validators.required],

      appointment_date: [new Date(), Validators.required],
      appointment_time: ['', Validators.required],

      payment_method: [''],
      payment_status: [''],

      duration: [0],
      recurrence: [''],
      notes: [''],

      notification_preferences: [[]],

      created_at: [new Date()],
      updated_at: [new Date()],
    })
  }

}
