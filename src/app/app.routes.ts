import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CalcularComponent } from './Components/calcular/calcular.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'calcular', component: CalcularComponent },
    { path: '**', pathMatch: 'full',redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});