import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { CartComponent } from "./cart.component";
import { cartRoutes } from "./cart.routing";
import { ShoppingCartModule } from "../shopping-cart/shopping-cart.module";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        RouterModule.forChild(cartRoutes),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatExpansionModule,
        MatRadioModule,
        MatSelectModule,

        SidenavModule,
        ShoppingCartModule,
    ],
    exports: [
        CartComponent
    ],
})
export class CartModule { }