import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { AppointmentSchedulerModule } from "../appointment-scheduler/appointment-scheduler.module";
import { CarouselModule } from "../carousel/carousel.module";

@NgModule({
    declarations: [
        HomeComponent,
        
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        SidenavModule,

        AppointmentSchedulerModule,
        CarouselModule,
    ],
})
export class HomeModule { }