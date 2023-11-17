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
        CarouselComponent
    ]
})
export class CarouselModule { }