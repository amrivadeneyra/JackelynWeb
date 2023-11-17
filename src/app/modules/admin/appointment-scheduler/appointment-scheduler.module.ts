import { NgModule } from "@angular/core";
import { AppointmentSchedulerComponent } from "./appointment-scheduler.component";

@NgModule({
    declarations: [
        AppointmentSchedulerComponent
    ],
    imports: [
       // RouterModule.forChild(homeRoutes),
    ],
    exports:[
        AppointmentSchedulerComponent
    ]
})
export class AppointmentSchedulerModule { }