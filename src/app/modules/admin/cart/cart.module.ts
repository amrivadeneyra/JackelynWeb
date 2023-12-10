import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";

import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CartComponent } from "./cart.component";
import { cartRoutes } from "./cart.routing";

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        RouterModule.forChild(cartRoutes),
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,

        SidenavModule,
    ],
    exports: [
        CartComponent
    ],
})
export class CartModule { }