import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        ShoppingCartComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
    ],
    exports: [
        ShoppingCartComponent
    ]
})
export class ShoppingCartModule { }