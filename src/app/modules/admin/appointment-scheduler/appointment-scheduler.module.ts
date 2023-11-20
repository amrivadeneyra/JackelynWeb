import { NgModule } from "@angular/core";
import { AppointmentSchedulerComponent } from "./appointment-scheduler.component";
import { RouterModule } from "@angular/router";
import { appointmentSchedulerRoutes } from "./appointment-scheduler.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        AppointmentSchedulerComponent
    ],
    imports: [
        RouterModule.forChild(appointmentSchedulerRoutes),
        CommonModule,
        MatDatepickerModule,
        MatInputModule,

        SidenavModule,
    ],
    exports: [
        AppointmentSchedulerComponent
    ]
})
export class AppointmentSchedulerModule { }