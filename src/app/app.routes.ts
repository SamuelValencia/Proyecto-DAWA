import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PrincingComponent } from './components/princing/princing.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes =  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'pricing', component: PrincingComponent },
    { path: 'prueba', component: PruebaComponent },
    { path: 'registrar', component: RegistrarComponent},
    { path: 'login' , component: LoginComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
  ];