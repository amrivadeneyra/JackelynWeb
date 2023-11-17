import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { productsRoutes } from "./products.routing";

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        RouterModule.forChild(productsRoutes),
    ],
    exports: [
        ProductsModule
    ]
})
export class ProductsModule { }