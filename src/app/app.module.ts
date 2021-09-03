import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Import rutas:

import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/headers/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CalcularComponent } from './Components/calcular/calcular.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CalcularComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
