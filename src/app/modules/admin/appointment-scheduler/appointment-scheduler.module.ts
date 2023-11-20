import { NgModule } from "@angular/core";
import { AppointmentSchedulerComponent } from "./appointment-scheduler.component";
import { RouterModule } from "@angular/router";
import { appointmentSchedulerRoutes } from "./appointment-scheduler.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_FORMATS, MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from '@angular/material/checkbox';

const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
@NgModule({
    declarations: [
        AppointmentSchedulerComponent
    ],
    imports: [
        RouterModule.forChild(appointmentSchedulerRoutes),
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,

        SidenavModule,
    ],
    exports: [
        AppointmentSchedulerComponent
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        // Otros proveedores de servicios si es necesario
    ],
})
export class AppointmentSchedulerModule { }