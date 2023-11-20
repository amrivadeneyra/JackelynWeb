import { NgModule } from "@angular/core";
import { AppointmentSchedulerComponent } from "./appointment-scheduler.component";
import { RouterModule } from "@angular/router";
import { appointmentSchedulerRoutes } from "./appointment-scheduler.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppointmentSchedulerComponent
    ],
    imports: [
        RouterModule.forChild(appointmentSchedulerRoutes),
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        FormsModule,

        SidenavModule,
    ],
    exports: [
        AppointmentSchedulerComponent
    ]
})
export class AppointmentSchedulerModule { }