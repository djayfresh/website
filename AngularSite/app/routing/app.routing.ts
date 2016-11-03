import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'djayfresh/component/home';
import { ProjectsComponent, ProjectComponent } from 'djayfresh/component/home';

import { AppRoutingPath } from './app.path';

const routes: Routes = [
    {
        path: AppRoutingPath.Home,
        component: HomeComponent,
        children: [{
            path: AppRoutingPath.Projects,
            component: ProjectsComponent,
            children: [{
                path: AppRoutingPath.Project,
                component: ProjectComponent
            }]
        }]
    }
];

export const AppRouting = RouterModule.forRoot(routes);