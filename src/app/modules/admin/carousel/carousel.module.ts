import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from "./carousel.component";

@NgModule({
    declarations: [
        CarouselComponent,
    ],
    imports: [
        //RouterModule.forChild(servicesRoutes),
    ],
    exports:[
        CarouselModule
    ]
})
export class CarouselModule { }