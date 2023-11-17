import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from "@angular/common/locales/es";
import { AppComponent } from './app.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import { appRoutes } from './app.routing';

registerLocaleData(localeEs, "es");

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, routerConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
