import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { servicesRoutes } from "./services.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ServicesComponent,
    ],
    imports: [
        RouterModule.forChild(servicesRoutes),
        CommonModule,

        SidenavModule,
    ],
    exports: [
        ServicesComponent,
    ]
})
export class ServicesModule { }