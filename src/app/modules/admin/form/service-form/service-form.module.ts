import { NgModule } from "@angular/core";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ServiceFormComponent } from "./service-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
    declarations: [
        ServiceFormComponent,
    ],
    imports: [
        CommonModule,

        SidenavModule,

        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDialogModule,

        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
    ],
    exports: [
        ServiceFormComponent,
    ]
})
export class ServiceFormModule { }