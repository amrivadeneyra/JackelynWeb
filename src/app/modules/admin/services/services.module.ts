import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { servicesRoutes } from "./services.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ServicesComponent,
    ],
    imports: [
        RouterModule.forChild(servicesRoutes),
        CommonModule,

        SidenavModule,

        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ServicesComponent,
    ]
})
export class ServicesModule { }