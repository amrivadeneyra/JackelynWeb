import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { servicesRoutes } from "./services.routing";

@NgModule({
    declarations: [
        ServicesComponent,
    ],
    imports: [
        RouterModule.forChild(servicesRoutes),
    ],
    exports: [
        ServicesComponent
    ]
})
export class ServicesModule { }