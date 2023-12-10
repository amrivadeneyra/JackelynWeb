import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { SignInModule } from "src/app/modules/auth/sign-in/sign-in.module";
import { CommonModule } from "@angular/common";
import { SignOutModule } from "src/app/modules/auth/sign-out/sign-out.module";
import { ServiceFormModule } from "src/app/modules/admin/form/service-form/service-form.module";
import { ShoppingCartModule } from "src/app/modules/admin/shopping-cart/shopping-cart.module";

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        SignInModule,
        SignOutModule,
        ServiceFormModule,
        ShoppingCartModule,
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule { }