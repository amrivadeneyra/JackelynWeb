import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from "./carousel.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CarouselComponent,
    ],
    imports: [
        //RouterModule.forChild(servicesRoutes),
        CommonModule,
    ],
    exports: [
        CarouselComponent
    ]
})
export class CarouselModule { }