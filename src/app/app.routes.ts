import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocLoginComponent } from './doc-login/doc-login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: DocLoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    } 
];
