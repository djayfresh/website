import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'djayfresh/component/home';

import { AppRoutingPath } from './app.path';

const routes: Routes = [
    {
        path: AppRoutingPath.Home,
        component: HomeComponent
    }
];

export const AppRouting = RouterModule.forRoot(routes);