import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'djayfresh/component/home';
import { ProjectsComponent, ProjectComponent } from 'djayfresh/component/home';

import { AppRoutingPath } from './app.path';

const routes: Routes = [
    {
        path: AppRoutingPath.Base,
        redirectTo: AppRoutingPath.Home,
        pathMatch: 'full',
    }, 
    {
        path: AppRoutingPath.Home,
        component: HomeComponent,
    },
    {
        path: AppRoutingPath.Projects,
        component: ProjectsComponent,
    },
    {
        path: AppRoutingPath.Project,
        component: ProjectComponent
    }
];

export const AppRouting = RouterModule.forRoot(routes);