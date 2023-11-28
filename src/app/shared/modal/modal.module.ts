import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { SignInModule } from "src/app/modules/auth/sign-in/sign-in.module";
import { CommonModule } from "@angular/common";
import { SignOutModule } from "src/app/modules/auth/sign-out/sign-out.module";

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        SignInModule,
        SignOutModule,
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule { }