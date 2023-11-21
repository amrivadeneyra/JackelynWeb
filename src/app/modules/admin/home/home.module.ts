import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CarouselModule } from "../carousel/carousel.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent,
        
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        SidenavModule,
        CommonModule,

        CarouselModule,
    ],
})
export class HomeModule { }