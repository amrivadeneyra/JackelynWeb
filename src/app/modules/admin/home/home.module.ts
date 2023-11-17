import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { SidenavComponent } from "src/app/layouts/sidenav/sidenav.component";
import { ServicesComponent } from "../services/services.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { ProductsComponent } from "../products/products.component";
import { homeRoutes } from "./home.routing";
import { AppointmentSchedulerComponent } from "../appointment-scheduler/appointment-scheduler.component";

@NgModule({
    declarations: [
        HomeComponent,
        SidenavComponent,
        ServicesComponent,
        CarouselComponent,
        ProductsComponent,
        AppointmentSchedulerComponent,
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
    ],
})
export class HomeModule { }