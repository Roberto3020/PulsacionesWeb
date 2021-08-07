import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CalcularComponent } from './Components/calcular/calcular.component';


const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'calcular', component: CalcularComponent },
    { path: '**', pathMatch: 'full',redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});