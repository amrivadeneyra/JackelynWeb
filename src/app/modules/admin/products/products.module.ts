import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { productsRoutes } from "./products.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        RouterModule.forChild(productsRoutes),

        SidenavModule,
    ],
    exports: [
        ProductsComponent,
    ]
})
export class ProductsModule { }