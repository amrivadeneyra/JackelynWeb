import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CarouselModule } from "../carousel/carousel.module";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        HomeComponent,
        
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        SidenavModule,
        CommonModule,
        MatIconModule,
        
        CarouselModule,
    ],
})
export class HomeModule { }