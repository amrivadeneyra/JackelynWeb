import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SidenavComponent
    ],
    imports: [
        MatIconModule,
        MatDialogModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        SidenavComponent
    ]
})
export class SidenavModule {
}