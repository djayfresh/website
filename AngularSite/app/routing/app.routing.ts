import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'djayfresh/component/home';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const AppRouting = RouterModule.forRoot(routes);