import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';

@NgModule({
    declarations: [
        SidenavComponent
    ],
    imports: [

    ],
    exports: [
        SidenavComponent
    ]
})
export class SidenavModule {
}